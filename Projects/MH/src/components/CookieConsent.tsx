"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("mh-cookie-consent");
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (value: string) => {
    localStorage.setItem("mh-cookie-consent", value);
    setLeaving(true);
    setTimeout(() => setVisible(false), 420);
  };

  if (!visible) return null;

  return (
    <>
      <div className={`cookie-overlay${leaving ? " cookie-overlay--out" : ""}`} />
      <div className={`cookie-modal${leaving ? " cookie-modal--out" : ""}`} role="dialog" aria-label="Cookie consent">
        <h2 className="cookie-modal-title">We value your privacy</h2>
        <p className="cookie-modal-desc">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.
        </p>
        <div className="cookie-modal-actions">
          <button className="cookie-modal-btn cookie-modal-btn--outline" onClick={() => dismiss("customized")}>
            Customize
          </button>
          <button className="cookie-modal-btn cookie-modal-btn--outline" onClick={() => dismiss("declined")}>
            Reject All
          </button>
          <button className="cookie-modal-btn cookie-modal-btn--primary" onClick={() => dismiss("accepted")}>
            Accept All
          </button>
        </div>
      </div>
    </>
  );
}
