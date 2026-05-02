import { Link } from 'react-router-dom'
import './ServiceCard.css'

interface ServiceCardProps {
  title: string
  desc: string
  slug: string
}

export default function ServiceCard({ title, desc, slug }: ServiceCardProps) {
  return (
    <Link to={`/services/${slug}`} className="service-card">
      <div className="service-card__icon-wrap">
        <div className="service-card__icon-placeholder" />
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__desc">{desc}</p>
        <span className="service-card__link">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </span>
      </div>
    </Link>
  )
}
