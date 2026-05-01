
import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getServiceBySlug, services } from '../data/services'
import { useInView } from '../hooks/useInView'
import Seo from '../components/Seo'
import './ServiceDetail.css'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined
  const aboutRef = useInView<HTMLElement>()
  const statsRef = useInView<HTMLElement>()
  const approachRef = useInView<HTMLElement>()
  const faqRef = useInView<HTMLElement>()
  const otherRef = useInView<HTMLElement>()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  if (!service) return <Navigate to="/services" replace />

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 4)

  return (
    <>
      <Seo
        title={`${service.title} | Breezyee Moves`}
        description={`${service.desc} Professional ${service.title.toLowerCase()} service across London. Get a free quote from Breezyee Moves today.`}
        canonical={`/services/${service.slug}`}
      />
      {/* Hero Banner */}
      <section className="sd-hero">
        <div className="sd-hero__bg">
          <div className="sd-hero__overlay" />
        </div>
        <div className="container sd-hero__inner">
          <Link to="/services" className="sd-hero__back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            All Services
          </Link>
          <h1 className="sd-hero__title slide-in-up">{service.title}</h1>
          <p className="sd-hero__subtitle fade-in">{service.heroSubtitle}</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="sd-stats" ref={statsRef}>
        <div className="container sd-stats__inner">
          {service.stats.map((s, i) => (
            <div className="sd-stat zoom-pop" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="sd-stat__value">{s.value}</span>
              <span className="sd-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About This Service */}
      <section className="section sd-about" ref={aboutRef}>
        <div className="container sd-about__grid">
          <div className="sd-about__image slide-in-left" aria-hidden="true" />
          <div className="sd-about__content slide-in-right">
            <span className="sd-about__eyebrow fade-in">About This Service</span>
            <h2 className="sd-about__title fade-in">{service.heroSubtitle}</h2>
            {service.details.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="sd-included stagger-children">
              <h3>What's Included</h3>
              <ul>
                {service.included.map((item, i) => (
                  <li key={i}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11.5 14.5 16 10"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="btn btn-primary sd-about__cta">
              Request a Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section sd-approach" ref={approachRef}>
        <div className="container sd-approach__inner">
          <div className="sd-approach__label">
            <span className="sd-approach__eyebrow fade-in">Our Approach</span>
            <h2 className="sd-approach__title fade-in">How We Deliver {service.title}</h2>
          </div>
          <div className="sd-approach__content fade-in">
            <p>{service.approach}</p>
            <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="btn btn-primary sd-approach__cta">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="section sd-faq" ref={faqRef}>
          <div className="container">
            <span className="sd-faq__eyebrow fade-in">Frequently Asked</span>
            <h2 className="sd-faq__title fade-in">Frequently Asked Questions</h2>
            <p className="sd-faq__intro fade-in">
              Below you'll find answers to the most common questions about our services. If you need more information, please contact us directly.
            </p>
            <div className="sd-faq__list stagger-children">
              {service.faqs.map((faq, i) => (
                <button
                  key={i}
                  className={`sd-faq__item${openFaq === i ? ' sd-faq__item--open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="sd-faq__question">
                    <span>{faq.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                  <div className="sd-faq__answer">
                    <p>{faq.a}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Explore Other Services */}
      <section className="section sd-other" ref={otherRef}>
        <div className="container">
          <span className="section-eyebrow fade-in">Explore More</span>
          <h2 className="section-title fade-in">See Our Other Services</h2>
          <p className="section-subtitle fade-in">
            We offer a full range of removal and logistics services to meet every need.
          </p>
          <div className="sd-other__grid stagger-children">
            {otherServices.map((s) => (
              <Link to={`/services/${s.slug}`} className="sd-other__card" key={s.slug}>
                <div className="sd-other__card-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="sd-other__card-link">
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
