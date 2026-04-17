"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("mh-cookie-consent");
    if (!consent) {
      // Small delay so it doesn't jar on first load
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (accepted: boolean) => {
    localStorage.setItem("mh-cookie-consent", accepted ? "accepted" : "declined");
    setLeaving(true);
    setTimeout(() => setVisible(false), 420);
  };

  if (!visible) return null;

  return (
    <div className={`cookie-bar${leaving ? " cookie-bar--out" : ""}`} role="dialog" aria-label="Cookie consent">
      <div className="cookie-bar-inner">
        <div className="cookie-bar-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
            <circle cx="8.5" cy="10" r="1" fill="currentColor" stroke="none"/>
            <circle cx="15" cy="8" r="1" fill="currentColor" stroke="none"/>
            <circle cx="14" cy="14" r="1" fill="currentColor" stroke="none"/>
            <path d="M12 2a7 7 0 0 1 7 7"/>
          </svg>
        </div>
        <div className="cookie-bar-text">
          <p className="cookie-bar-title">We use cookies</p>
          <p className="cookie-bar-desc">
            We use cookies to improve your browsing experience and analyse site traffic.
            By clicking <strong>Accept</strong> you consent to our use of cookies.{" "}
            <a href="#contact" className="cookie-bar-link" onClick={() => dismiss(false)}>Learn more</a>
          </p>
        </div>
        <div className="cookie-bar-actions">
          <button className="cookie-btn cookie-btn--decline" onClick={() => dismiss(false)}>
            Decline
          </button>
          <button className="cookie-btn cookie-btn--accept" onClick={() => dismiss(true)}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
