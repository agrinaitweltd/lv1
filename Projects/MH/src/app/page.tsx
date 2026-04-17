"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const SERVICES = [
  {
    id: "full-detail",
    label: "Full Detail",
    price: "£60",
    tag: "Most Popular",
    bg: "/service-full-detail.png",
    points: [
      "Full exterior wash & polish",
      "Interior deep clean",
      "Leather / fabric treatment",
      "Tyre & trim dressing",
      "Clay bar, wax & glass treatment",
    ],
    description:
      "The complete M.H Detailz experience. Interior and exterior correction with deep gloss and premium finishing.",
  },
  {
    id: "mini-valet",
    label: "Mini Valet",
    price: "£40",
    bg: "/service-mini-valet.png",
    points: [
      "Exterior snow-foam wash",
      "Interior wipe-down & vacuum",
      "Windows cleaned",
      "Tyre dressing",
    ],
    description:
      "A maintenance package designed to keep your vehicle fresh between full details.",
  },
  {
    id: "full-interior",
    label: "Full Interior",
    price: "£25",
    bg: "/service-full-interior.png",
    points: [
      "Seats deep-cleaned",
      "Carpets and mats refreshed",
      "Dashboard detailed",
      "Trim cleaned",
    ],
    description:
      "A focused interior reset that brings your cabin back to premium condition.",
  },
  {
    id: "full-exterior",
    label: "Full Exterior",
    price: "£25",
    bg: "/service-full-exterior.png",
    points: [
      "Snow-foam pre-wash",
      "Safe hand wash",
      "Polish enhancement",
      "Protection layer",
    ],
    description:
      "External finish restoration with extra gloss and durable paint protection.",
  },
];

const TESTIMONIALS = [
  {
    name: "James R.",
    text: "Attention to detail is unreal. My car looked better than the day I bought it.",
  },
  {
    name: "Sophie K.",
    text: "Booked Full Detail and I was genuinely amazed. Mirror gloss and spotless interior.",
  },
  {
    name: "Marcus T.",
    text: "Professional throughout, super clean work and clear communication all the way.",
  },
  {
    name: "Priya L.",
    text: "Different level of detailing. Meticulous and worth every penny.",
  },
  {
    name: "Daniel W.",
    text: "Fast turnaround, premium result. Will definitely book again.",
  },
];

const GALLERY = [
  {
    src: "/gallery-1.png",
    alt: "Car detailing result 1",
  },
  {
    src: "/gallery-2.png",
    alt: "Car detailing result 2",
  },
  {
    src: "/gallery-3.png",
    alt: "Car detailing result 3",
  },
  {
    src: "/gallery-4.png",
    alt: "Car detailing result 4",
  },
  {
    src: "/gallery-5.png",
    alt: "Car detailing result 5",
  },
];

const PROCESS = [
  {
    title: "Inspect",
    body: "Paintwork and interior condition assessed before any product touches the vehicle.",
  },
  {
    title: "Correct",
    body: "Safe wash, decontamination, and finish correction where needed.",
  },
  {
    title: "Protect",
    body: "Durable protection layers applied to lock in gloss and defend surfaces.",
  },
  {
    title: "Deliver",
    body: "Final quality check and handover with a clear aftercare recommendation.",
  },
];

export default function Home() {
  const [activeService, setActiveService] = useState(SERVICES[0].id);
  const active = SERVICES.find((s) => s.id === activeService)!

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);;

  return (
    <main>
      <Header currentPath="/" />

      <section className="hero">
        <div className="hero-deco-shape" aria-hidden="true" />
        <div className="hero-brand-vertical" aria-hidden="true">M.H DETAILZ</div>
        <div className="hero-content fade-in-up">
          <p className="eyebrow">Premium Car Detailing · UK</p>
          <h1 className="hero-headline">
            <span>CORRECTION.</span>
            <span>REFLECTION.</span>
            <span className="accent-word">PROTECTION.</span>
          </h1>
          <p className="hero-sub">All Roads Lead Home</p>
          <div className="hero-actions">
            <Link href="/book-now" className="btn-primary">Book Your Detail</Link>
            <a href="#services" className="btn-ghost">View Services</a>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <article className="trust-card reveal-up"><h3>170K+</h3><p>Audience Reach</p></article>
          <article className="trust-card reveal-up"><h3>10+</h3><p>Years Experience</p></article>
          <article className="trust-card reveal-up"><h3>5.0</h3><p>Client Feedback</p></article>
          <article className="trust-card reveal-up"><h3>Weekends</h3><p>11 AM - 6 PM</p></article>
        </div>
      </section>

      <section className="about section-shell scroll-reveal">
        <div className="container about-grid">
          <div className="about-copy">
            <h2 className="about-headline">#DETAILING<br /><em>THE MH WAY</em></h2>
            <ul className="about-list">
              <li><strong>Recognised & Trusted</strong><span>Built on consistency, quality and premium finishing standards.</span></li>
              <li><strong>Personalised Car Care</strong><span>Every car receives a tailored approach based on paint and interior condition.</span></li>
              <li><strong>Detailing With Purpose</strong><span>Not just clean, but corrected, protected and presented to a high-end finish.</span></li>
            </ul>
            <div className="about-actions">
              <Link href="/book-now" className="btn-primary">Book Now</Link>
              <a href="#contact" className="btn-outline">Get in Touch</a>
            </div>
          </div>
          <div className="about-image-wrap">
            <div className="about-deco-shape" aria-hidden="true" />
            <img
              src="/about.png"
              alt="M.H Detailz at work"
              className="about-img"
            />
          </div>
        </div>
      </section>

      <section id="services" className="services section-shell"
        style={{ backgroundImage: `url("${active.bg}")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="services-bg-overlay" key={activeService} aria-hidden="true" />
        <div className="container services-layout">
          <div className="services-header">
            <h2>M.H DETAILZ SERVICES</h2>
            <div className="section-rule" />
          </div>
          <div className="services-body">
            <nav className="services-nav" aria-label="Service tabs">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  className={`service-tab ${activeService === s.id ? "active" : ""}`}
                  onClick={() => setActiveService(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </nav>
            <div className="service-panel" key={activeService}>
              <div className="service-panel-top">
                <span className="service-panel-price">{active.price}</span>
                {active.tag && <span className="service-tag">{active.tag}</span>}
              </div>
              <h3>{active.label}</h3>
              <p className="service-desc">{active.description}</p>
              <ul className="service-points">
                {active.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <Link href="/book-now" className="btn-primary service-cta">{active.label} →</Link>
            </div>
          </div>
        </div>
        <p className="services-note container">Prices may vary depending on vehicle type and condition.</p>
      </section>

      <section className="process-home section-shell scroll-reveal">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Process</p>
            <h2>How We Detail</h2>
            <div className="section-rule" />
          </div>
          <div className="process-grid">
            {PROCESS.map((step, i) => (
              <article key={step.title} className="process-card reveal-up" style={{ animationDelay: `${i * 120}ms` }}>
                <span className="process-index">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery section-shell scroll-reveal" id="gallery">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Results</p>
            <h2>Detailing Gallery</h2>
            <div className="section-rule" />
          </div>
          <div className="gallery-grid">
            {GALLERY.map((image, idx) => (
              <figure key={image.alt} className={`gallery-item g-${idx + 1}`}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials section-shell scroll-reveal">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Reviews</p>
            <h2>YOUR <em>FEEDBACK</em></h2>
            <div className="section-rule" />
          </div>
        </div>
        <div className="testimonials-marquee-outer">
          <div className="testimonials-track">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <article key={i} className="testi-card">
                <span className="testi-quote">&ldquo;</span>
                <p>{t.text}</p>
                <strong>{t.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section section-shell scroll-reveal">
        <div className="container contact-grid">
          <div className="contact-copy">
            <h2>REACH <em>OUT</em></h2>
            <p>Have a question or want a quote? We would love to hear from you.</p>
            <p>Send your vehicle details and preferred service. We respond as fast as possible with available slots.</p>
            <p className="contact-avail">Sat & Sun · 11:00 AM - 6:00 PM</p>
          </div>
          <div className="contact-form-outer">
            <div className="contact-deco-l" aria-hidden="true" />
            <div className="contact-deco-r" aria-hidden="true" />
            <form className="contact-form">
              <label>Full Name<input type="text" name="name" required /></label>
              <div className="form-row">
                <label>Email<input type="email" name="email" required /></label>
                <label>Phone<input type="tel" name="phone" /></label>
              </div>
              <label>Vehicle Make & Model<input type="text" name="vehicle" /></label>
              <label>Message<textarea name="message" rows={4} /></label>
              <button type="submit" className="btn-primary form-submit">Send →</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

