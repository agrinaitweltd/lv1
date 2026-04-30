import './PageCta.css'

export default function PageCta() {
  return (
    <section className="page-cta">
      <div className="container page-cta__inner">
        <div className="page-cta__content">
          <h2 className="page-cta__title">Message me for a FREE Quote!</h2>
          <p className="page-cta__text">
            Professional exterior cleaning at affordable prices. Driveways from £60, patios from £40, bins from £5. Get in touch today.
          </p>
        </div>
        <a href="tel:07555653736" className="page-cta__button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          Call 07555 653736
        </a>
      </div>
    </section>
  )
}
