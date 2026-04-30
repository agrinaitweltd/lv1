import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getServicesByGroup, services, type ServiceData } from '../data/services'
import './Header.css'

const navLinks = [
  { label: 'Home', path: '/', num: '01' },
  { label: 'About', path: '/about', num: '02' },
  { label: 'Services', path: '/services', num: '03', hasDropdown: true },
  { label: 'Contact', path: '/contact', num: '04' },
]

const homeServices = getServicesByGroup('home')
const businessServices = getServicesByGroup('business')
const allServices = [...homeServices, ...businessServices]

// All searchable pages
const searchablePages = [
  ...services.map((s) => ({ title: s.title, path: `/services/${s.slug}`, desc: s.desc })),
  { title: 'Home', path: '/', desc: 'Breezyee Moves home page' },
  { title: 'About Us', path: '/about', desc: 'Learn about Breezyee Moves' },
  { title: 'Our Services', path: '/services', desc: 'View all our services' },
  { title: 'Contact / Get a Quote', path: '/contact', desc: 'Get a free quote for your move' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const searchInputRef = useRef<HTMLInputElement>(null)

  const searchResults = searchQuery.trim().length > 0
    ? searchablePages.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
    setSearchOpen(false)
    setSearchQuery('')
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  // Close search results on click outside
  useEffect(() => {
    if (!searchOpen) return
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.header__search-bar')) {
        setSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [searchOpen])

  const handleMenuClick = () => {
    if (menuOpen) {
      setMenuOpen(false)
    } else {
      // On desktop when scrolled, scroll to top instead of opening menu
      if (scrolled && window.innerWidth > 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setMenuOpen(true)
      }
    }
  }

  const handleSearchNav = (path: string) => {
    setSearchOpen(false)
    setSearchQuery('')
    navigate(path)
  }

  return (
    <>
      {/* Top bar — visible before scroll */}
      <div className={`header-topbar${scrolled ? ' header-topbar--hidden' : ''}`}>
        <div className="container header-topbar__inner">
          <div className="header-topbar__left">
            <span>Covering London &amp; Surrounding Areas</span>
          </div>
          <div className="header-topbar__right">
            <a href="tel:+4407398395022" className="header-topbar__link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              +44 07398 395022
            </a>
            <a href="mailto:contactus@breezyeemoves.co.uk" className="header-topbar__link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              contactus@breezyeemoves.co.uk
            </a>
          </div>
        </div>
      </div>

      <header className={`header${scrolled ? ' header--scrolled' : ''}${menuOpen ? ' header--menu-open' : ''}`}>
        <div className="container header__inner">
          <Link to="/" className="header__logo">
            <img src="/logo.png" alt="Breezyee Moves" className="header__logo-img" />
          </Link>

          {/* Desktop nav — visible before scroll */}
          <nav className={`header__nav-desktop${scrolled ? ' header__nav-desktop--hidden' : ''}`}>
            {navLinks.map((link) => (
              <div key={link.path} className={`header__nav-item${link.hasDropdown ? ' header__nav-item--dropdown' : ''}`}>
                <Link
                  to={link.path}
                  className={`header__link${location.pathname === link.path ? ' header__link--active' : ''}`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg className="header__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                  )}
                </Link>
                {link.hasDropdown && (
                  <div className="header__dropdown">
                    <div className="header__dropdown-inner">
                      <div className="header__dropdown-col">
                        <span className="header__dropdown-heading">For Homes & Individuals</span>
                        {homeServices.map((s: ServiceData) => (
                          <Link key={s.slug} to={`/services/${s.slug}`} className="header__dropdown-link">{s.title}</Link>
                        ))}
                      </div>
                      <div className="header__dropdown-col">
                        <span className="header__dropdown-heading">For Businesses</span>
                        {businessServices.map((s: ServiceData) => (
                          <Link key={s.slug} to={`/services/${s.slug}`} className="header__dropdown-link">{s.title}</Link>
                        ))}
                      </div>
                      <div className="header__dropdown-col header__dropdown-col--cta">
                        <span className="header__dropdown-heading">Need help choosing?</span>
                        <p className="header__dropdown-copy">
                          Our team can recommend the best service for your move, clearance or logistics project.
                        </p>
                        <Link to="/contact" className="header__dropdown-cta">Get a quote</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Inline search bar — visible at top on desktop, always on mobile */}
          <div className={`header__search-bar${scrolled ? ' header__search-bar--hidden' : ''}`}>
            <div className="header__search-bar-wrap">
              <input
                ref={searchInputRef}
                type="text"
                className="header__search-bar-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') { setSearchOpen(false); setSearchQuery('') }
                  if (e.key === 'Enter' && searchResults.length > 0) handleSearchNav(searchResults[0].path)
                }}
              />
              <svg className="header__search-bar-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            {searchOpen && searchQuery.trim().length > 0 && (
              <div className="header__search-dropdown">
                {searchResults.length > 0 ? (
                  <ul className="header__search-results">
                    {searchResults.map((r) => (
                      <li key={r.path}>
                        <button onClick={() => handleSearchNav(r.path)} className="header__search-result">
                          <strong>{r.title}</strong>
                          <span>{r.desc}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="header__search-empty">No results found for "{searchQuery}"</p>
                )}
              </div>
            )}
          </div>

          {/* Right-side actions */}
          <div className="header__actions">
            {/* Quote button — visible before scroll on desktop */}
            <Link to="/contact" className={`header__quote-btn${scrolled ? ' header__quote-btn--hidden' : ''}`}>
              Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>

            {/* Menu button — visible after scroll on desktop, always on mobile */}
            <button
              className={`header__menu-btn${scrolled ? ' header__menu-btn--visible' : ''}${menuOpen ? ' header__menu-btn--open' : ''}`}
              onClick={handleMenuClick}
              aria-label="Toggle menu"
            >
              <span className="header__menu-btn-text">{menuOpen ? 'CLOSE' : 'MENU'}</span>
              <span className="header__menu-btn-icon">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen menu overlay */}
      <div className={`header__mobile${menuOpen ? ' header__mobile--open' : ''}`}>
        <div className="header__mobile-inner">
          <nav className="header__mobile-nav">
            {navLinks.map((link, i) => (
              <div key={link.path} className="header__mobile-item" style={{ transitionDelay: `${menuOpen ? i * 80 + 100 : 0}ms` }}>
                <div className="header__mobile-row">
                  <span className="header__mobile-num">{link.num}</span>
                {link.hasDropdown ? (
                    <div className="header__mobile-link-row">
                      <Link to={link.path} className="header__mobile-link">
                        {link.label}
                      </Link>
                      <button
                        className={`header__mobile-toggle${servicesOpen ? ' header__mobile-toggle--open' : ''}`}
                        onClick={() => setServicesOpen(!servicesOpen)}
                        aria-label="Toggle services"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                      </button>
                    </div>
                  ) : (
                    <Link to={link.path} className="header__mobile-link">
                      {link.label}
                      {location.pathname === link.path && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      )}
                    </Link>
                  )}
                </div>
                {link.hasDropdown && (
                  <div className={`header__mobile-sub${servicesOpen ? ' header__mobile-sub--open' : ''}`}>
                    <span className="header__mobile-sub-group">For Homes &amp; Individuals</span>
                    {homeServices.map((s: ServiceData) => (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="header__mobile-sub-link">
                        <span className="header__mobile-sub-chevron">&rsaquo;</span>
                        {s.title}
                      </Link>
                    ))}
                    <span className="header__mobile-sub-group">For Businesses</span>
                    {businessServices.map((s: ServiceData) => (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="header__mobile-sub-link">
                        <span className="header__mobile-sub-chevron">&rsaquo;</span>
                        {s.title}
                      </Link>
                    ))}
                    <Link to="/services" className="header__mobile-sub-all">View all services →</Link>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
