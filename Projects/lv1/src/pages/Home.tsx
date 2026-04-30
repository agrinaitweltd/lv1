import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { services } from '../data/services'
import Seo from '../components/Seo'
import './Home.css'

const whyUs = [
  { title: 'Fully Insured & Reliable', desc: 'All work is backed by comprehensive insurance and our quality guarantee.' },
  { title: 'Skilled Professionals', desc: 'Our experienced team delivers every move with care and precision.' },
  { title: 'Transparent Pricing', desc: 'Fair, competitive quotes with no hidden fees or surprise charges.' },
  { title: 'Swift Turnaround', desc: 'We respect your time and complete jobs efficiently without compromising quality.' },
]

const steps = [
  { num: '01', title: 'Request a Quote', desc: 'Tell us about your move and get a free, no-obligation quote within hours.' },
  { num: '02', title: 'Plan Your Move', desc: 'We work with you to plan every detail so moving day runs smoothly.' },
  { num: '03', title: 'We Move You Safely', desc: 'Sit back while our expert team handles everything with care.' },
]

const aboutFeatures = [
  { icon: 'check', title: 'Fully Insured', desc: 'Comprehensive cover on every move we undertake.' },
  { icon: 'check', title: 'Experienced Crew', desc: 'Skilled professionals who handle your belongings with care.' },
  { icon: 'check', title: 'Transparent Pricing', desc: 'No hidden charges — just honest, competitive quotes.' },
]

const testimonials = [
  { name: 'Sarah T.', location: 'Islington, London', text: 'Breezyee Moves made our house move completely stress-free. The team was punctual, careful, and incredibly friendly. Could not recommend them more highly!', rating: 5 },
  { name: 'James K.', location: 'Camden, London', text: 'Used their man and van service for a last-minute move. They were flexible, affordable, and did an amazing job. Will definitely use again.', rating: 5 },
  { name: 'Amara O.', location: 'Brixton, London', text: 'As a student on a budget, I was worried about moving costs. Breezyee offered a brilliant student rate and the service was top-notch. Love their community focus!', rating: 5 },
]

const helpedCategories = [
  { slug: 'home-office-storage-removals', icon: 'home', title: 'Home/Office Removals', desc: 'Full-service packing, loading, and delivery to your new home or office.' },
  { slug: 'man-and-van', icon: 'truck', title: 'Man & Van', desc: 'Flexible collection and delivery for single items, small loads, or last-minute moves.' },
  { slug: 'end-of-tenancy-clearance', icon: 'clean', title: 'End of Tenancy Clearance', desc: 'Complete clean-up, waste removal, and property checks for inspection-ready handovers.' },
  { slug: 'office-warehouse-relocations', icon: 'building', title: 'Office Relocations', desc: 'Specialist commercial moves with minimal downtime for your business operations.' },
]

export default function Home() {
  const servicesRef = useInView<HTMLElement>()
  const aboutRef = useInView<HTMLElement>()
  const whyRef = useInView<HTMLElement>()
  const howRef = useInView<HTMLElement>()
  const helpedRef = useInView<HTMLElement>()
  const testimonialsRef = useInView<HTMLElement>()

  return (
    <>
      <Seo
        title="Breezyee Moves | London Removals & Logistics"
        description="London's trusted removal specialists. Home removals, man & van, office relocations, end of tenancy clearances and more. Get a free quote today."
        canonical="/"
      />
      <Hero />

      {/* Services Overview */}
      <section className="section home-services" ref={servicesRef} id="services">
        <div className="container">
          <span className="section-eyebrow fade-in">What We Offer</span>
          <h2 className="section-title fade-in">Every Service You Need</h2>
          <p className="section-subtitle fade-in">
            From a single item to an entire household — our specialist teams cover every aspect of removals and logistics.
          </p>
          <div className="home-services__grid stagger-children">
            {services.slice(0, 6).map((s) => (
              <Link to={`/services/${s.slug}`} className="home-svc-card" key={s.slug}>
                <div className="home-svc-card__img">
                  {s.bannerImg && <img src={s.bannerImg} alt={s.title} loading="lazy" />}
                </div>
                <div className="home-svc-card__body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="home-svc-card__link">
                    View Service
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="services-cta fade-in">
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* About Breezyee Section */}
      <section className="section home-about-breezyee" ref={aboutRef}>
        <div className="container home-about-breezyee__inner">
          <div className="home-about-breezyee__image slide-in-left">
            <img src="/about-impact.png" alt="Breezyee Moves van" />
          </div>
          <div className="home-about-breezyee__content slide-in-right">
            <span className="home-about-breezyee__eyebrow">About Breezyee</span>
            <h2 className="home-about-breezyee__title">Professional Removal Services for Your Home</h2>
            <p className="home-about-breezyee__text">
              At Breezyee Moves, we bridge gaps for young people (NEET), empowering them to overcome challenges and build brighter futures. Every move you book directly supports our community programme.
            </p>
            <div className="home-about-breezyee__features stagger-children">
              {aboutFeatures.map((f) => (
                <div className="home-about-breezyee__feature" key={f.title}>
                  <div className="home-about-breezyee__feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="home-about-breezyee__logo-row">
              <img src="/logo9.png" alt="Breezyee Moves" className="home-about-breezyee__logo-badge" />
            </div>
            <Link to="/about" className="btn btn-primary fade-in">Read Our Story</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section home-why-choose" ref={whyRef}>
        <div className="container">
          <span className="section-eyebrow fade-in">Why Choose Us</span>
          <h2 className="section-title fade-in">The standard you deserve</h2>
          <p className="section-subtitle fade-in">
            We hold ourselves to the highest professional standards so you never have to compromise.
          </p>
          <div className="why-grid stagger-children">
            {whyUs.map((item, i) => (
              <div className="why-card" key={item.title}>
                <span className="why-card__num">0{i + 1}</span>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section home-how" ref={howRef}>
        <div className="container">
          <span className="section-eyebrow fade-in">How It Works</span>
          <h2 className="section-title fade-in">Our Simple Process</h2>
          <p className="section-subtitle fade-in">
            Three simple steps to a stress-free move.
          </p>
          <div className="steps-grid stagger-children">
            {steps.map((step) => (
              <div className="step-card" key={step.num}>
                <span className="step-card__num">{step.num}</span>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We've Already Helped */}
      <section className="section home-helped" ref={helpedRef}>
        <div className="container">
          <span className="home-helped__eyebrow fade-in">Trusted Nationwide</span>
          <h2 className="home-helped__title fade-in">
            We've already helped over <span className="home-helped__count">981</span> movers
          </h2>
          <p className="home-helped__subtitle fade-in">
            From first-time tenants to large commercial relocations, our network of partners cover every step of your journey.
          </p>
          <div className="home-helped__grid stagger-children">
            {helpedCategories.map((cat) => (
              <div className="home-helped__card" key={cat.title}>
                <div className="home-helped__card-icon">
                  {cat.icon === 'home' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
                  {cat.icon === 'truck' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>}
                  {cat.icon === 'clean' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>}
                  {cat.icon === 'building' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22V12h6v10"/><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01"/></svg>}
                </div>
                <h3 className="home-helped__card-title">{cat.title}</h3>
                <p className="home-helped__card-desc">{cat.desc}</p>
                <Link to={`/services/${cat.slug}`} className="home-helped__card-btn">
                  View Service
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section home-testimonials" ref={testimonialsRef}>
        <div className="container">
          <span className="section-eyebrow fade-in">Testimonials</span>
          <h2 className="section-title fade-in">What Our Customers Say</h2>
          <p className="section-subtitle fade-in">
            Don't just take our word for it — hear from people we've helped move.
          </p>
          <div className="testimonials-grid stagger-children">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.name}>
                <div className="testimonial-card__stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
