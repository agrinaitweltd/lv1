"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const SERVICES = [
  {
    id: "full-detail",
    category: "SIGNATURE PACKAGE",
    label: "Full Detail",
    price: "£60",
    tag: "Most Popular",
    size: "All Vehicles",
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
    category: "MAINTENANCE",
    label: "Mini Valet",
    price: "£40",
    size: "All Vehicles",
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
    category: "INTERIOR",
    label: "Full Interior",
    price: "£25",
    size: "All Vehicles",
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
    category: "EXTERIOR",
    label: "Full Exterior",
    price: "£25",
    size: "All Vehicles",
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
  const [openCard, setOpenCard] = useState<string | null>(null);

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
        <div className="hero-brands" aria-label="Vehicles we service">
          {["McLaren", "Aston Martin", "BMW", "Lamborghini", "Ferrari", "Porsche"].map((b) => (
            <span key={b} className="hero-brand-item">{b}</span>
          ))}
        </div>
        <div className="hero-content fade-in-up">
          <h1 className="hero-headline">
            <span>CORRECTION.</span>
            <span>REFLECTION.</span>
            <span className="accent-word">PROTECTION.</span>
          </h1>
          <p className="hero-sub">
            Premium Car Detailing <span className="hero-sep">///</span> Paint Protection Specialist
          </p>
          <div className="hero-actions">
            <Link href="/book-now" className="btn-cta-rust">BOOK MY APPOINTMENT</Link>
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

      <section id="services" className="services-grid-section section-shell">
        <div className="container">
          <div className="services-grid-header">
            <p className="eyebrow">Services &amp; Pricing</p>
            <h2>M.H DETAILZ SERVICES</h2>
            <p className="services-grid-sub">Choose the package that suits your vehicle. All services delivered by hand with premium products.</p>
          </div>
          <div className="svc-grid">
            {SERVICES.map((service) => (
              <div key={service.id} className={`svc-card${service.tag ? " svc-card--gold" : ""}`}>
                <p className="svc-card-cat">{service.category}</p>
                <h3 className="svc-card-name"><em>{service.label}</em></h3>
                <div className="svc-car-icon" aria-hidden="true">
                  <svg viewBox="0 0 80 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="36">
                    <path d="M14 26H10a3 3 0 01-3-3v-4l5-11h36l5 11v4a3 3 0 01-3 3h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="19" cy="27" r="5" stroke="currentColor" strokeWidth="1.8"/>
                    <circle cx="61" cy="27" r="5" stroke="currentColor" strokeWidth="1.8"/>
                    <path d="M24 26h32" stroke="currentColor" strokeWidth="1.8"/>
                  </svg>
                </div>
                <div className="svc-card-size">
                  <svg viewBox="0 0 16 16" width="13" height="13" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/><path d="M8 5v3.5l2 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                  <span>{service.size}</span>
                </div>
                <p className="svc-card-price">{service.price}</p>
                {service.tag && <span className="svc-card-tag">{service.tag}</span>}
                {openCard === service.id && (
                  <ul className="svc-card-points">
                    {service.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                )}
                <div className="svc-card-btns">
                  <Link href="/book-now" className="svc-btn-book">BOOK NOW</Link>
                  <button
                    className="svc-btn-included"
                    type="button"
                    onClick={() => setOpenCard(openCard === service.id ? null : service.id)}
                  >
                    WHAT&apos;S INCLUDED
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="services-note">Prices may vary depending on vehicle type and condition.</p>
        </div>
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
            <div className="copy-rule" aria-hidden="true" />
            <p>If you have a question, some feedback, or you&apos;d like a quote for your vehicle, we&apos;d love to hear from you.</p>
            <p>Complete the contact form and we&apos;ll get back to you as soon as we can. Response times can vary depending on current schedule &mdash; during peak periods, lead times might be anywhere from one to three weeks.</p>
            <p>Feel free to attach photos of your car &mdash; the more details you can provide in your message, the better.</p>
            <p>Looking forward to hearing from you!</p>
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
              <label>Vehicle Make &amp; Model<input type="text" name="vehicle" /></label>
              <label>Vehicle Year, Mileage, and Colour<input type="text" name="vehicle_detail" /></label>
              <label>City / Postcode<input type="text" name="postcode" /></label>
              <div className="form-field-group">
                <p className="form-group-label">Services Required</p>
                <div className="form-checkboxes">
                  {["Full Detail", "Mini Valet", "Full Interior", "Full Exterior"].map((svc) => (
                    <label key={svc} className="form-check-label">
                      <input type="checkbox" name="services" value={svc} className="form-check-input" />
                      <span>{svc}</span>
                    </label>
                  ))}
                </div>
              </div>
              <label>Photos (Optional, Max. 5)<input type="file" name="photos" multiple accept="image/*" className="form-file" /></label>
              <label>Message<textarea name="message" rows={4} /></label>
              <button type="submit" className="btn-send-rust form-submit">SEND →</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

