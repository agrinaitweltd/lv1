import { useState, useEffect } from 'react'
import './Header.css'

const navLinks = [
  { label: 'Home', href: '#top', num: '01' },
  { label: 'Services', href: '#services', num: '02' },
  { label: 'About', href: '#about', num: '03' },
  { label: 'Contact', href: '#contact', num: '04' },
]

function scrollToAnchor(href: string) {
  if (href === '#top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    scrollToAnchor(href)
  }

  return (
    <>
      {/* Top bar — visible before scroll */}
      <div className={`header-topbar${scrolled ? ' header-topbar--hidden' : ''}`}>
        <div className="container header-topbar__inner">
          <div className="header-topbar__left">
            <span>Professional Exterior Cleaning Service</span>
          </div>
          <div className="header-topbar__right">
            <a href="tel:07555653736" className="header-topbar__link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              07555 653736 — FREE Quote
            </a>
          </div>
        </div>
      </div>

      <header className={`header${scrolled ? ' header--scrolled' : ''}${menuOpen ? ' header--menu-open' : ''}`}>
        <div className="container header__inner">
          <a href="#top" className="header__logo" onClick={(e) => handleNav(e, '#top')}>
            <span className="header__logo-img">LV Exterior Cleaning</span>
          </a>

          {/* Desktop nav — visible before scroll */}
          <nav className={`header__nav-desktop${scrolled ? ' header__nav-desktop--hidden' : ''}`}>
            {navLinks.map((link) => (
              <div key={link.href} className="header__nav-item">
                <a
                  href={link.href}
                  className="header__link"
                  onClick={(e) => handleNav(e, link.href)}
                >
                  {link.label}
                </a>
              </div>
            ))}
          </nav>

          {/* Right-side actions */}
          <div className="header__actions">
            <a
              href="tel:07555653736"
              className={`header__quote-btn${scrolled ? ' header__quote-btn--hidden' : ''}`}
            >
              Call Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            </a>

            <button
              className={`header__menu-btn${scrolled ? ' header__menu-btn--visible' : ''}${menuOpen ? ' header__menu-btn--open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
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
              <div key={link.href} className="header__mobile-item" style={{ transitionDelay: `${menuOpen ? i * 80 + 100 : 0}ms` }}>
                <div className="header__mobile-row">
                  <span className="header__mobile-num">{link.num}</span>
                  <a
                    href={link.href}
                    className="header__mobile-link"
                    onClick={(e) => handleNav(e, link.href)}
                  >
                    {link.label}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </nav>
          <div className="header__mobile-footer">
            <a href="tel:07555653736" className="header__mobile-cta">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              07555 653736 — FREE Quote
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
