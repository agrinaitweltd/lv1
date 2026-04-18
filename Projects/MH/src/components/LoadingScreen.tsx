"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("mh-visited");
    const duration = hasVisited ? 2000 : 3000;
    sessionStorage.setItem("mh-visited", "1");

    const fadeTimer = setTimeout(() => setFadeOut(true), duration - 600);
    const hideTimer = setTimeout(() => setVisible(false), duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loading-screen${fadeOut ? " loading-screen--out" : ""}`}>
      <div className="loading-logo-wrap">
        <img src="/logo.png" alt="M.H Detailz" className="loading-logo" />
        <div className="loading-bar-track">
          <div className="loading-bar-fill" />
        </div>
        <p className="loading-tagline">Premium Car Detailing</p>
      </div>
    </div>
  );
}
