import { Link } from 'react-router-dom'
import './PageCta.css'

export default function PageCta() {
  return (
    <section className="page-cta">
      <div className="container page-cta__inner">
        <div className="page-cta__content">
          <h2 className="page-cta__title">Ready to Start Your Project?</h2>
          <p className="page-cta__text">
            Get in touch for a free, no-obligation consultation and quote.
          </p>
        </div>
        <Link to="/contact" className="page-cta__button">
          Get a Quote
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
