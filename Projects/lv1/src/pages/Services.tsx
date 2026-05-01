import { services } from '../data/services'
import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import './Services.css'

const processSteps = [
  { num: '01', title: 'Get In Touch', desc: 'Contact us by phone, email or through our online form. Tell us about your project and we\'ll get back to you promptly.' },
  { num: '02', title: 'Free Consultation', desc: 'We arrange a convenient time to discuss your requirements and assess the scope of work in detail.' },
  { num: '03', title: 'Receive Your Quote', desc: 'We provide a clear, itemised quote with full transparency on costs, materials and timescales. No hidden fees.' },
  { num: '04', title: 'Work Begins', desc: 'Our skilled team arrives on time and gets to work. We deliver quality throughout and leave your property clean and tidy.' },
]

export default function Services() {
  const heroRef = useInView<HTMLElement>()
  const gridRef = useInView<HTMLElement>()
  const processRef = useInView<HTMLElement>()

  return (
    <>
      <Seo
        title="Our Services | Breezyee Moves"
        description="Browse all removal and logistics services offered by Breezyee Moves — home removals, man & van, office relocations, end of tenancy clearance, student moves and more."
        canonical="/services"
      />
      <section className="services-hero" ref={heroRef}>
        <div className="services-hero__bg">
          <div className="services-hero__overlay" />
        </div>
        <div className="container">
          <span className="services-hero__eyebrow fade-in">Our Expertise</span>
          <h1 className="services-hero__title slide-in-up">Our Services</h1>
          <p className="services-hero__subtitle fade-in">
            A complete range of professional removal and logistics services, delivered to the highest standard across London and the UK.
          </p>
        </div>
      </section>

      <section className="section services-section" ref={gridRef}>
        <div className="container">
          <div className="services-section__header">
            <span className="section-eyebrow fade-in">What We Offer</span>
            <h2 className="section-title fade-in">Every Service You Need</h2>
            <p className="fade-in">
              From house moves to specialist logistics — our professional teams cover every aspect of removals and property services.
            </p>
          </div>

          <div className="services-card-grid stagger-children">
            {services.map((s) => (
              <Link to={`/services/${s.slug}`} className="svc-card" key={s.slug}>
                <div className="svc-card__body">
                  <h3 className="svc-card__title">{s.title}</h3>
                  <p className="svc-card__desc">{s.desc}</p>
                  <span className="svc-card__link">
                    View Service
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="services-cta-wrap fade-in">
            <p>Need a custom solution? We're happy to help.</p>
            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className="section services-process" ref={processRef}>
        <div className="container">
          <div className="services-process__header">
            <span className="section-eyebrow fade-in">How It Works</span>
            <h2 className="section-title fade-in">Our Simple Process</h2>
            <p className="fade-in">
              Getting started is straightforward. From first contact to final completion, we keep things clear and simple.
            </p>
          </div>

          <div className="process-grid stagger-children">
            {processSteps.map((step) => (
              <div className="process-step" key={step.num}>
                <span className="process-step__num">{step.num}</span>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
