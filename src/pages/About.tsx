import { useInView } from '../hooks/useInView'
import Seo from '../components/Seo'
import './About.css'

const values = [
  { num: '01', title: 'Quality', desc: 'We use only the finest materials and proven techniques, ensuring every project we complete meets the highest standard of craftsmanship.' },
  { num: '02', title: 'Reliability', desc: 'We show up on time, complete work on schedule and communicate clearly throughout every project — no surprises, no excuses.' },
  { num: '03', title: 'Transparency', desc: 'Honest, upfront pricing with no hidden costs. We give you a clear picture of scope, timelines and cost from the very first meeting.' },
  { num: '04', title: 'Excellence', desc: 'We hold ourselves to an exceptional standard in everything we do — constantly improving our practices, skills and service.' },
]

const stats = [
  { value: '5,000+', label: 'Moves Completed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '150+', label: 'Community Jobs Created' },
  { value: '12', label: 'Years of Service' },
]

export default function About() {
  const storyRef = useInView<HTMLElement>()
  const valuesRef = useInView<HTMLElement>()
  const impactRef = useInView<HTMLElement>()
  const galleryRef = useInView<HTMLElement>()

  return (
    <>
      <Seo
        title="About Us | Breezyee Moves"
        description="Learn about Breezyee Moves — a London-based social enterprise delivering reliable, fairly priced removal and logistics services across the city."
        canonical="/about"
      />
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <div className="about-hero__overlay" />
        </div>
        <div className="container about-hero__inner">
          <span className="about-hero__eyebrow fade-in">About Us</span>
          <h1 className="about-hero__title slide-in-up">About Breezyee Moves</h1>
          <p className="about-hero__subtitle fade-in">
            Trusted removal professionals, dedicated to quality and reliability across London and surrounding areas.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section about-story" ref={storyRef}>
        <div className="container about-story__grid">
          <div className="about-story__content slide-in-left">
            <span className="about-story__eyebrow">Our Story</span>
            <h2 className="about-story__title">Every move you book with us helps a young person build a brighter future.</h2>
            <p>
              That's not marketing - it's our reason for being.
            </p>
            <p>
              At Breezyee Moves, our social mission comes first: we bridge gaps for young people who are NEET (Not in Education, Employment, or Training), turning every removal, clearance, and logistics job into real training and employment. When you hire a Breezyee crew member by the hour - efficient, thorough, and ready to work - you're directly creating opportunities.
            </p>
            <p>
              But here's the honest truth: a social mission only works if the service is brilliant. So let us tell you how we got here.
            </p>
            <p>
              It started simple: one man and his van. That was us, just getting on with it, caring about every job. Then it became one man and two boys - teaching, lifting, learning together. That small shift changed everything. We realised we weren't just moving furniture; we were building people.
            </p>
            <p>
              Today, Breezyee Moves is a skilled, multidisciplinary team covering removals, logistics, clearance, and specialist services. Every Breezyee crew member shares the same values we started with: craftsmanship, honest communication, and genuine care for every client and every home.
            </p>
            <p>
              We're still that one-man-and-his-van crew at heart - just bigger, stronger, and more committed than ever. Your trust built us. And with every move, we help a young person build their future.
            </p>
            <p>That's our story. Welcome to Breezyee Moves.</p>
          </div>
          <div className="about-story__image slide-in-right" aria-hidden="true" />
        </div>
      </section>

      {/* Core Values */}
      <section className="section about-values" ref={valuesRef}>
        <div className="container">
          <div className="about-values__header">
            <span className="section-eyebrow fade-in">What We Stand For</span>
            <h2 className="section-title fade-in">Our Core Values</h2>
            <p className="section-subtitle fade-in">
              These principles guide every decision we make and every project we deliver.
            </p>
          </div>
          <div className="values-grid stagger-children">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <span className="value-card__num">{v.num}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section about-gallery" ref={galleryRef}>
        <div className="container">
          <div className="about-gallery__header">
            <span className="section-eyebrow fade-in">Gallery</span>
            <h2 className="section-title fade-in">See Us In Action</h2>
          </div>
          <div className="about-gallery__grid stagger-children">
            <div className="about-gallery__item about-gallery__item--wide">
              <p>Image gallery has been removed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section about-impact" ref={impactRef}>
        <div className="container">
          <div className="about-impact__header">
            <span className="section-eyebrow fade-in">Our Impact</span>
            <h2 className="section-title fade-in">Numbers That Matter</h2>
            <p className="section-subtitle fade-in">
              Statistics Source: UK Office for National Statistics, 2023
            </p>
          </div>
          <div className="impact-grid stagger-children">
            {stats.map((s) => (
              <div className="impact-card" key={s.label}>
                <span className="impact-card__value">{s.value}</span>
                <span className="impact-card__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
