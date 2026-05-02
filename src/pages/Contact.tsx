import { useState, useRef, type FormEvent } from 'react'
import { useInView } from '../hooks/useInView'
import { useSearchParams } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
import AddressLookup from '../components/AddressLookup'
import Seo from '../components/Seo'
import './Contact.css'

const serviceOptions = [
  'Home/Office/Storage Removals',
  'End of Tenancy Clearance',
  'Student Accommodation Relocations',
  'Man & Van Collection/Delivery',
  'Self-Drive Van Hire',
  'Office & Warehouse Relocations',
  'Construction Site Logistics',
  'On-Demand Breezyeers',
  'Other',
]

const propertySizes = [
  { label: '1 Bed', icon: '🏠' },
  { label: '2 Bed', icon: '🏠' },
  { label: '3 Bed', icon: '🏡' },
  { label: '4 Bed', icon: '🏡' },
  { label: '5+ Bed', icon: '🏘️' },
  { label: 'Studio', icon: '🏢' },
  { label: 'Office', icon: '🏬' },
  { label: 'Warehouse', icon: '🏭' },
  { label: 'Storage Unit', icon: '📦' },
]

const testimonials = [
  { name: 'Sarah T.', date: '15/02/2026', rating: 5, text: 'Very prompt on the day. Moved everything without any breakages or damage. Things protected with custom made padded covers. Experience pleasant and happy.' },
  { name: 'James K.', date: '08/01/2026', rating: 5, text: 'Brilliant service from start to finish. The team were on time, professional and took great care of all our belongings. Would use again in a heartbeat.' },
]

const partnerBadges = ['Fully Insured', 'Ombudsman Backed', 'Competitive', 'Vetted']

const inventoryRooms: { name: string; items: string[] }[] = [
  { name: 'Living Room', items: ['TV', 'TV Stand', 'Coffee Table', 'Sofa (2 Seater)', 'Sofa (3 Seater)', 'Armchair', 'Bookshelf', 'Side Table', 'Rug', 'Floor Lamp'] },
  { name: 'Kitchen', items: ['Fridge Freezer', 'Washing Machine', 'Dishwasher', 'Microwave', 'Dining Table', 'Dining Chairs', 'Kitchen Trolley', 'Bar Stool'] },
  { name: 'Bedroom', items: ['Single Bed', 'Double Bed', 'King Bed', 'Wardrobe', 'Chest of Drawers', 'Bedside Table', 'Dressing Table', 'Mirror'] },
  { name: 'Dining & Hall', items: ['Dining Table', 'Dining Chairs', 'Sideboard', 'Console Table', 'Hallway Table', 'Coat Stand', 'Shoe Rack'] },
  { name: 'Office', items: ['Office Desk', 'Office Chair', 'Filing Cabinet', 'Bookcase', 'Printer', 'Monitor', 'Desktop PC'] },
  { name: 'Garden & Garage', items: ['Lawnmower', 'BBQ', 'Garden Table', 'Garden Chairs', 'Bicycle', 'Tool Box', 'Workbench'] },
  { name: 'Boxes', items: ['Small Box', 'Medium Box', 'Large Box', 'Wardrobe Box', 'Fragile Box', 'Suitcase'] },
]

export default function Contact() {
  const formRef = useInView<HTMLElement>()
  const [searchParams] = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [propertySize, setPropertySize] = useState('')
  const [selectedService, setSelectedService] = useState(searchParams.get('service') || '')
  const [activeRoom, setActiveRoom] = useState(0)
  const [inventory, setInventory] = useState<Record<string, number>>({})
  const [showInventory, setShowInventory] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const captchaRef = useRef<ReCAPTCHA>(null)
  const formRef2 = useRef<HTMLFormElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!captchaToken) return
    setSubmitError(null)
    setSubmitting(true)
    const form = formRef2.current!
    const getValue = (name: string) => (form.elements.namedItem(name) as HTMLInputElement | null)?.value || ''
    const payload = {
      firstName: getValue('first-name'),
      lastName: getValue('last-name'),
      email: getValue('email'),
      phone: getValue('phone'),
      service: selectedService,
      propertySize,
      currentAddress: getValue('current-address'),
      newAddress: getValue('new-address'),
      moveDate: getValue('move-date'),
      instructions: getValue('instructions'),
      inventory: Object.fromEntries(Object.entries(inventory).filter(([, v]) => v > 0)),
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Server error')
      setSubmitted(true)
      setTimeout(() => successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
    } catch {
      setSubmitError('Something went wrong sending your request. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  const getCount = (item: string) => inventory[`${inventoryRooms[activeRoom].name}::${item}`] || 0

  const setCount = (item: string, val: number) => {
    if (val < 0) return
    const key = `${inventoryRooms[activeRoom].name}::${item}`
    setInventory((prev) => ({ ...prev, [key]: val }))
  }

  const totalItems = Object.values(inventory).reduce((sum, v) => sum + v, 0)

  return (
    <>
      <Seo
        title="Get a Free Quote | Breezyee Moves"
        description="Request a free removal quote from Breezyee Moves. Tell us about your move and we'll get back to you within 2 hours with a personalised price."
        canonical="/contact"
      />
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <div className="contact-hero__overlay" />
        </div>
        <div className="container">
          <div className="contact-hero__inner">
            <h1 className="contact-hero__title slide-in-up">Get Your Free Quote</h1>
            <p className="contact-hero__subtitle fade-in">
              Compare quotes from our expert team. Instantly get a competitive, no-obligation quote for your move.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-section" ref={formRef}>
        <div className="container contact-grid">
          {/* Form */}
          <div className="contact-form-wrap slide-in-left">
            {submitted ? (
              <div className="contact-success" ref={successRef}>
                <div className="contact-success__icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3>Thank You!</h3>
                <p>We've received your request and will get back to you within 24 hours with your personalised quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" ref={formRef2}>
                {/* Property Size */}
                <div className="contact-form__section">
                  <h2 className="contact-form__section-title">Size of current property</h2>
                  <div className="contact-form__property-grid">
                    {propertySizes.map((size) => (
                      <button
                        type="button"
                        key={size.label}
                        className={`contact-form__property-btn${propertySize === size.label ? ' contact-form__property-btn--active' : ''}`}
                        onClick={() => setPropertySize(size.label)}
                      >
                        <span className="contact-form__property-icon">{size.icon}</span>
                        <span className="contact-form__property-label">{size.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Move Details */}
                <div className="contact-form__section">
                  <h2 className="contact-form__section-title">Removals details</h2>
                  <div className="contact-form__field">
                    <label htmlFor="service">Service Required</label>
                    <select id="service" name="service" required value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <AddressLookup
                    id="current-address"
                    name="current-address"
                    label="Current property address"
                    placeholder="Start typing a postcode e.g. BR3 1SQ..."
                  />
                  <AddressLookup
                    id="new-address"
                    name="new-address"
                    label="New property address"
                    placeholder="Start typing a postcode e.g. SW1A 1AA..."
                  />
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="move-date">Estimated moving date</label>
                      <input type="date" id="move-date" name="move-date" />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" placeholder="+44 07398 395022" />
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="instructions">Special instructions</label>
                    <textarea id="instructions" name="instructions" rows={3} placeholder="Please list special requirements e.g. packing / storage / pianos / awkward access / limited parking..." />
                  </div>
                </div>

                {/* Item Inventory */}
                <div className="contact-form__section">
                  <div className="contact-form__inventory-header">
                    <div>
                      <h2 className="contact-form__section-title">Item Inventory</h2>
                      <p className="contact-form__section-note">
                        Add items you'll need moved for a more accurate quote. {totalItems > 0 && <strong>{totalItems} item{totalItems !== 1 ? 's' : ''} added</strong>}
                      </p>
                    </div>
                    <button type="button" className="contact-form__inventory-toggle" onClick={() => setShowInventory(!showInventory)}>
                      {showInventory ? 'Hide' : 'Add Items'}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: showInventory ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }}>
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>
                  </div>

                  {showInventory && (
                    <div className="contact-inventory">
                      <div className="contact-inventory__tabs">
                        {inventoryRooms.map((room, i) => (
                          <button
                            type="button"
                            key={room.name}
                            className={`contact-inventory__tab${activeRoom === i ? ' contact-inventory__tab--active' : ''}`}
                            onClick={() => setActiveRoom(i)}
                          >
                            {room.name}
                          </button>
                        ))}
                      </div>
                      <div className="contact-inventory__items">
                        {inventoryRooms[activeRoom].items.map((item) => (
                          <div className="contact-inventory__row" key={item}>
                            <span className="contact-inventory__item-name">{item}</span>
                            <div className="contact-inventory__counter">
                              <button type="button" className="contact-inventory__btn" onClick={() => setCount(item, getCount(item) - 1)} disabled={getCount(item) === 0}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                              </button>
                              <span className="contact-inventory__count">{getCount(item)}</span>
                              <button type="button" className="contact-inventory__btn contact-inventory__btn--add" onClick={() => setCount(item, getCount(item) + 1)}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Personal Details */}
                <div className="contact-form__section">
                  <h2 className="contact-form__section-title">Your details</h2>
                  <p className="contact-form__section-note">
                    By completing this form your details are shared with our team for providing a quote, but absolutely no one else.
                  </p>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="first-name">First name</label>
                      <input type="text" id="first-name" name="first-name" required />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="last-name">Last name</label>
                      <input type="text" id="last-name" name="last-name" required />
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" name="email" required placeholder="john@example.com" />
                  </div>
                </div>

                <div className="contact-form__captcha">
                  <ReCAPTCHA
                    ref={captchaRef}
                    sitekey="6Ldu_KwsAAAAAHL62xddmHH8qfeTSGKbI3-xAIrq"
                    onChange={(token) => setCaptchaToken(token)}
                    onExpired={() => setCaptchaToken(null)}
                  />
                </div>
                {submitError && (
                  <p className="contact-form__error">{submitError}</p>
                )}
                <button type="submit" className="btn btn-primary contact-form__submit" disabled={!captchaToken || submitting}>
                  {submitting ? 'Sending…' : 'Get Your Quote'}
                  {!submitting && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="contact-sidebar slide-in-right">
            {/* Testimonial */}
            <div className="contact-sidebar__card">
              <h3>What our customers say...</h3>
              {testimonials.map((t) => (
                <div className="contact-sidebar__review" key={t.name}>
                  <div className="contact-sidebar__stars">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                  <p className="contact-sidebar__review-text">"{t.text}"</p>
                  <span className="contact-sidebar__review-author">{t.name} on {t.date}</span>
                </div>
              ))}
            </div>

            {/* Partner badges */}
            <div className="contact-sidebar__card">
              <h3>Our partners are all:</h3>
              <ul className="contact-sidebar__badges">
                {partnerBadges.map((b) => (
                  <li key={b}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="contact-sidebar__card contact-sidebar__card--dark">
              <h3>Need to talk?</h3>
              <ul className="contact-sidebar__contact-list">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  <span>+44 07398 395022</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span>contactus@breezyeemoves.co.uk</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>Mon-Sat: 7am-8pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
