"use client";

import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  currentPath?: string;
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Book Now", href: "/book-now" },
  { label: "Contact", href: "/#contact" },
];

export default function Header({ currentPath = "/" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="logo" aria-label="M.H Detailz Home">
          <span>M.H</span>
          <span>Detailz</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => {
            const isActive =
              currentPath === item.href ||
              (item.href !== "/" && currentPath.startsWith(item.href));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={isActive ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/book-now" className="book-cta">
          Book Now
        </Link>
      </div>
    </header>
  );
}
