import { useState, useEffect } from 'react'
import './CookieConsent.css'

interface CookiePrefs {
  necessary: boolean
  preferences: boolean
  statistics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [prefs, setPrefs] = useState<CookiePrefs>({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const saveConsent = (type: string) => {
    localStorage.setItem('cookie-consent', type)
    localStorage.setItem('cookie-prefs', JSON.stringify(prefs))
    setVisible(false)
  }

  const allowAll = () => {
    setPrefs({ necessary: true, preferences: true, statistics: true, marketing: true })
    localStorage.setItem('cookie-consent', 'all')
    localStorage.setItem('cookie-prefs', JSON.stringify({ necessary: true, preferences: true, statistics: true, marketing: true }))
    setVisible(false)
  }

  const deny = () => {
    saveConsent('denied')
  }

  const allowSelection = () => {
    saveConsent('selection')
  }

  const toggle = (key: keyof CookiePrefs) => {
    if (key === 'necessary') return
    setPrefs((p) => ({ ...p, [key]: !p[key] }))
  }

  if (!visible) return null

  return (
    <div className="cookie-consent">
      <div className="cookie-consent__banner">
        <div className="cookie-consent__main">
          <div className="cookie-consent__text-col">
            <h3 className="cookie-consent__title">This website uses cookies</h3>
            <p className="cookie-consent__text">
              We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you've provided to them or that they've collected from your use of their services.
            </p>
          </div>
          <div className="cookie-consent__actions">
            <button className="cookie-consent__btn cookie-consent__btn--primary" onClick={allowAll}>
              Allow all
            </button>
            <button className="cookie-consent__btn cookie-consent__btn--outline" onClick={allowSelection}>
              Allow selection
            </button>
            <button className="cookie-consent__btn cookie-consent__btn--outline" onClick={deny}>
              Deny
            </button>
          </div>
        </div>
        <div className="cookie-consent__toggles">
          <div className="cookie-consent__toggle-item">
            <label className="cookie-consent__switch">
              <input type="checkbox" checked={prefs.necessary} disabled />
              <span className="cookie-consent__slider cookie-consent__slider--locked" />
            </label>
            <span className="cookie-consent__toggle-label">Necessary</span>
          </div>
          <div className="cookie-consent__toggle-item">
            <label className="cookie-consent__switch">
              <input type="checkbox" checked={prefs.preferences} onChange={() => toggle('preferences')} />
              <span className="cookie-consent__slider" />
            </label>
            <span className="cookie-consent__toggle-label">Preferences</span>
          </div>
          <div className="cookie-consent__toggle-item">
            <label className="cookie-consent__switch">
              <input type="checkbox" checked={prefs.statistics} onChange={() => toggle('statistics')} />
              <span className="cookie-consent__slider" />
            </label>
            <span className="cookie-consent__toggle-label">Statistics</span>
          </div>
          <div className="cookie-consent__toggle-item">
            <label className="cookie-consent__switch">
              <input type="checkbox" checked={prefs.marketing} onChange={() => toggle('marketing')} />
              <span className="cookie-consent__slider" />
            </label>
            <span className="cookie-consent__toggle-label">Marketing</span>
          </div>
          <button className="cookie-consent__details-link" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? 'Hide details' : 'Show details'}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: showDetails ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>
      </div>
    </div>
  )
}
