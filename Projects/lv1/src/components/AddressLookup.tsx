import { useState, useRef, useEffect, type ChangeEvent } from 'react'
import './AddressLookup.css'

const API_KEY = 'ak_mnoi19rcOuqMWn0H0p5vgf6pntmUK'

interface Props {
  id: string
  name: string
  label: string
  placeholder?: string
}

interface IdealAddress {
  line_1: string
  line_2: string
  line_3: string
  post_town: string
  postcode: string
  county: string
}

export default function AddressLookup({ id, name, label, placeholder }: Props) {
  const [postcodeQuery, setPostcodeQuery] = useState('')
  const [addresses, setAddresses] = useState<IdealAddress[]>([])
  const [selectedAddress, setSelectedAddress] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const wrapRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  async function fetchAddresses(postcode: string) {
    const cleaned = postcode.replace(/\s+/g, '').toUpperCase()
    const url = `https://api.ideal-postcodes.co.uk/v1/postcodes/${encodeURIComponent(cleaned)}?api_key=${API_KEY}`

    try {
      const res = await fetch(url)
      let data: { code: number; result?: IdealAddress[]; message?: string }

      try {
        data = await res.json()
      } catch {
        setAddresses([])
        setError('Postcode not found. Please check and try again.')
        setShowDropdown(true)
        return
      }

      // Success response
      if (data.code === 2000 && Array.isArray(data.result) && data.result.length > 0) {
        setAddresses(data.result)
        setError('')
        setShowDropdown(true)
        return
      }

      // Postcode not found (4040) or no results
      if (data.code === 4040) {
        setAddresses([])
        setError('Postcode not found. Please check and try again.')
        setShowDropdown(true)
        return
      }

      // Invalid key or other errors
      if (data.code === 4010 || data.code === 4020) {
        setAddresses([])
        setError('Address lookup temporarily unavailable.')
        setShowDropdown(true)
        return
      }

      // Fallback
      setAddresses([])
      setError('No addresses found for this postcode')
      setShowDropdown(true)
    } catch {
      setAddresses([])
      setError('Connection error. Please try again.')
      setShowDropdown(true)
    }
  }

  function handlePostcodeChange(e: ChangeEvent<HTMLInputElement>) {
    const val = e.target.value
    setPostcodeQuery(val)
    setSelectedAddress('')
    setError('')

    if (debounceRef.current) clearTimeout(debounceRef.current)

    const cleaned = val.replace(/\s+/g, '')
    if (cleaned.length >= 5) {
      setLoading(true)
      setShowDropdown(true)
      debounceRef.current = setTimeout(async () => {
        await fetchAddresses(val)
        setLoading(false)
      }, 400)
    } else {
      setAddresses([])
      setShowDropdown(false)
      setLoading(false)
    }
  }

  function formatAddress(addr: IdealAddress): string {
    const parts = [addr.line_1, addr.line_2, addr.line_3, addr.post_town, addr.postcode].filter(Boolean)
    return parts.join(', ')
  }

  function selectAddress(addr: IdealAddress) {
    const full = formatAddress(addr)
    setSelectedAddress(full)
    setPostcodeQuery(full)
    setShowDropdown(false)
  }

  function handleReset() {
    setPostcodeQuery('')
    setSelectedAddress('')
    setAddresses([])
    setShowDropdown(false)
    setError('')
  }

  function handleFindClick() {
    const cleaned = postcodeQuery.replace(/\s+/g, '')
    if (cleaned.length >= 3) {
      setLoading(true)
      setShowDropdown(true)
      fetchAddresses(postcodeQuery).then(() => setLoading(false))
    }
  }

  return (
    <div className="address-lookup" ref={wrapRef}>
      <label className="address-lookup__label" htmlFor={id}>{label}</label>

      {!selectedAddress ? (
        <div className="address-lookup__postcode-wrap">
          <div className="address-lookup__input-row">
            <input
              type="text"
              id={id}
              placeholder={placeholder || 'Enter postcode e.g. BR3 1SQ'}
              value={postcodeQuery}
              onChange={handlePostcodeChange}
              onFocus={() => addresses.length > 0 && setShowDropdown(true)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleFindClick())}
              autoComplete="off"
              className="address-lookup__input"
            />
            <button
              type="button"
              className="address-lookup__find-btn"
              onClick={handleFindClick}
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Find Address'}
            </button>
          </div>
          {showDropdown && (
            <div className="address-dropdown">
              {loading ? (
                <div className="address-dropdown__loading">
                  <span className="address-dropdown__spinner-inline" />
                  Finding addresses...
                </div>
              ) : error ? (
                <div className="address-dropdown__loading address-dropdown__error">{error}</div>
              ) : addresses.length > 0 ? (
                <>
                  <div className="address-dropdown__count">
                    {addresses.length} address{addresses.length !== 1 ? 'es' : ''} found
                  </div>
                  <ul className="address-dropdown__list">
                    {addresses.map((addr, i) => (
                      <li key={i}>
                        <button
                          type="button"
                          className="address-dropdown__item"
                          onClick={() => selectAddress(addr)}
                        >
                          <strong>{addr.line_1}{addr.line_2 ? `, ${addr.line_2}` : ''}</strong>
                          <span>{addr.post_town}, {addr.postcode}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          )}
        </div>
      ) : (
        <div className="address-lookup__confirmed">
          <div className="address-lookup__confirmed-header">
            <div className="address-lookup__confirmed-postcode">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="address-lookup__confirmed-text">{selectedAddress}</span>
            </div>
            <button type="button" className="address-lookup__change-btn" onClick={handleReset}>
              Change
            </button>
          </div>
        </div>
      )}

      <input type="hidden" name={name} value={selectedAddress} />
    </div>
  )
}
