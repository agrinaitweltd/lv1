"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const SEARCH_ITEMS = [
  { label: "Full Detail – £60", href: "/#services", desc: "Complete interior & exterior correction" },
  { label: "Mini Valet – £40", href: "/#services", desc: "Maintenance wash & interior wipe-down" },
  { label: "Full Interior – £25", href: "/#services", desc: "Seats, carpets, dashboard & trim" },
  { label: "Full Exterior – £25", href: "/#services", desc: "Snow foam, hand wash & protection" },
  { label: "Book Now", href: "/book-now", desc: "Reserve your weekend detail slot" },
  { label: "About M.H Detailz", href: "/#about", desc: "Premium detailing the MH way" },
  { label: "Gallery", href: "/#gallery", desc: "Before & after detailing results" },
  { label: "Contact", href: "/#contact", desc: "Get in touch or ask a question" },
  { label: "Our Process", href: "/#process", desc: "Inspect, Correct, Protect, Deliver" },
];

export default function Header({ currentPath = "/" }: { currentPath?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const results = query.trim().length > 0
    ? SEARCH_ITEMS.filter(
        (i) =>
          i.label.toLowerCase().includes(query.toLowerCase()) ||
          i.desc.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>

      {/* ── Top info bar (hidden when scrolled) ── */}
      {!scrolled && (
        <div className="header-topbar">
          <div className="header-topbar-inner">
            <span className="topbar-left">Premium Car Detailing &middot; Weekends Only</span>
            <div className="topbar-right">
              <a href="tel:07440771820" className="topbar-contact">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>
                07440 771820
              </a>
              <a href="mailto:mhdetailz6@gmail.com" className="topbar-contact">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
                mhdetailz6@gmail.com
              </a>
              <div className="topbar-socials">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.2.1 4.7 1.7 4.8 4.8.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.1-1.6 4.7-4.8 4.8-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1C4 21.4 2.5 19.8 2.4 16.7c-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8C2.5 4 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 2.9.3.3 2.9.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9C.3 21.1 2.9 23.7 7.1 23.9 8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.2-.2 6.8-2.8 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9C23.7 2.9 21.1.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Main nav bar ── */}
      <div className="nav-shell">
        <Link href="/" className="logo" aria-label="M.H Detailz – Home">
          <img src="/logo.png" alt="M.H Detailz" className="logo-img" />
        </Link>

        {/* Nav links — hidden when scrolled, shown in mobile menu */}
        {!scrolled && (
          <nav className={`nav-links ${open ? "open" : ""}`}>
            <Link href="/" className={currentPath === "/" ? "active" : ""} onClick={() => setOpen(false)}>Home</Link>
            <Link href="/book-now" className={currentPath === "/book-now" ? "active" : ""} onClick={() => setOpen(false)}>Book Now</Link>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </nav>
        )}

        {/* Search bar — only when not scrolled */}
        {!scrolled && (
          <div className="nav-search-wrap" ref={searchRef}>
            <div className="nav-search-box">
              <svg className="search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="search"
                placeholder="Search..."
                value={query}
                onChange={(e) => { setQuery(e.target.value); setSearchOpen(true); }}
                onFocus={() => setSearchOpen(true)}
                aria-label="Search site"
              />
            </div>
            {searchOpen && results.length > 0 && (
              <div className="search-dropdown" role="listbox">
                {results.map((r) => (
                  <a
                    key={r.href + r.label}
                    href={r.href}
                    className="search-result"
                    onClick={() => { setSearchOpen(false); setQuery(""); }}
                    role="option"
                  >
                    <span className="search-result-label">{r.label}</span>
                    <span className="search-result-desc">{r.desc}</span>
                  </a>
                ))}
              </div>
            )}
            {searchOpen && query.trim().length > 0 && results.length === 0 && (
              <div className="search-dropdown">
                <p className="search-empty">No results for &ldquo;{query}&rdquo;</p>
              </div>
            )}
          </div>
        )}

        {/* CTA — only visible before scroll */}
        {!scrolled && <Link href="/book-now" className="nav-cta">BOOK NOW &rarr;</Link>}

        {/* Scrolled state: MENU button */}
        {scrolled && (
          <button
            className={`menu-toggle scrolled-menu ${open ? "is-open" : ""}`}
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            MENU
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        )}

        {/* Hamburger — mobile only, pre-scroll */}
        {!scrolled && (
          <button className="menu-toggle" onClick={() => setOpen((p) => !p)} aria-label="Toggle menu" aria-expanded={open}>
            <span /><span /><span />
          </button>
        )}

        {/* Mobile / scrolled nav drawer */}
        {open && (
          <nav className="nav-drawer">
            {/* Header bar inside overlay — visible on mobile only */}
            <div className="drawer-header">
              <Link href="/" className="drawer-logo" onClick={() => setOpen(false)}>
                <img src="/logo.png" alt="M.H Detailz" style={{ height: "44px", width: "auto" }} />
              </Link>
              <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Numbered nav items */}
            <div className="drawer-items">
              <Link href="/" className={`drawer-item${currentPath === "/" ? " active" : ""}`} onClick={() => setOpen(false)}>
                <span className="drawer-num">01</span>
                <span className="drawer-label">Home</span>
                <span className="drawer-arrow">→</span>
              </Link>
              <a href="/#about" className="drawer-item" onClick={() => setOpen(false)}>
                <span className="drawer-num">02</span>
                <span className="drawer-label">About</span>
              </a>
              <a href="/#services" className="drawer-item" onClick={() => setOpen(false)}>
                <span className="drawer-num">03</span>
                <span className="drawer-label">Services</span>
                <span className="drawer-arrow">↓</span>
              </a>
              <a href="/#contact" className="drawer-item" onClick={() => setOpen(false)}>
                <span className="drawer-num">04</span>
                <span className="drawer-label">Contact</span>
              </a>
            </div>

            {/* CTA at bottom — visible on mobile only */}
            <div className="drawer-footer">
              <Link href="/book-now" className="drawer-book-cta" onClick={() => setOpen(false)}>
                Book Your Detail →
              </Link>
            </div>
          </nav>
        )}
      </div>

    </header>
  );
}
