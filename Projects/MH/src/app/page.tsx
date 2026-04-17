"use client"
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const SERVICES = [
  {
    id: "full-detail",
    label: "Full Detail",
    price: "£60",
    tag: "Most Popular",
    points: [
      "Full exterior wash & polish",
      "Interior deep clean",
      "Leather / fabric treatment",
      "Tyre & trim dressing",
      "Clay bar, wax & glass treatment",
    ],
    description:
      "The definitive M.H Detailz experience. Every surface — inside and out — treated with precision so your car leaves genuinely showroom-fresh.",
  },
  {
    id: "mini-valet",
    label: "Mini Valet",
    price: "£40",
    tag: undefined,
    points: [
      "Exterior snow-foam wash",
      "Interior wipe-down & vacuum",
      "Windows cleaned inside & out",
      "Tyre dressing applied",
    ],
    description:
      "The smart maintenance choice. Keeps your vehicle looking sharp between full details without the full turnaround time.",
  },
  {
    id: "full-interior",
    label: "Full Interior",
    price: "£25",
    tag: undefined,
    points: [
      "Seats deep-cleaned & treated",
      "Carpets & mats refreshed",
      "Dashboard & plastics detailed",
      "Door cards & trim cleaned",
    ],
    description:
      "A complete interior reset. Ideal after long trips, pet hair, or the daily build-up that makes a cabin feel tired.",
  },
  {
    id: "full-exterior",
    label: "Full Exterior",
    price: "£25",
    tag: undefined,
    points: [
      "Snow-foam pre-wash",
      "Hand wash & dry",
      "Polish enhancement",
      "Wax protection layer",
    ],
    description:
      "Lift your paintwork fast. A focused exterior detail that removes contamination and lays down a protective finish.",
  },
];

const TESTIMONIALS = [
  {
    name: "James R.",
    text: "Absolutely blown away by the results. My car looked better than the day I bought it. The attention to detail is second to none — I won't be going anywhere else.",
  },
  {
    name: "Sophie K.",
    text: "Booked the Full Detail and I'm genuinely amazed. The interior smells brand new and the paintwork is mirror-perfect. Worth every penny.",
  },
  {
    name: "Marcus T.",
    text: "Trusted M.H Detailz with my BMW and they delivered. Kept me updated throughout, professional start to finish. Top tier service.",
  },
  {
    name: "Priya L.",
    text: "I've had my car detailed before but never like this. The standard here is completely different — meticulous and thorough. Highly recommend.",
  },
  {
    name: "Daniel W.",
    text: "Turned up, picked up my car and it looked incredible. Quick turnaround without any compromise on quality. Will be booking every month.",
  },
];

export default function Home() {
  const [activeService, setActiveService] = useState(SERVICES[0].id);
  const active = SERVICES.find((s) => s.id === activeService)!;

  return (
    <main>
      <Header currentPath="/" />

      {/* HERO */}
      <section className="hero">
        <div className="hero-deco-shape" aria-hidden="true" />
        <div className="hero-brand-vertical" aria-hidden="true">M.H DETAILZ</div>
        <div className="hero-content fade-in-up">
          <p className="eyebrow">Premium Car Detailing · UK</p>
          <h1 className="hero-headline">
            <span>DETAIL.</span>
            <span>PROTECT.</span>
            <span className="accent-word">PERFECT.</span>
          </h1>
          <p className="hero-sub">
            Premium Car Detailing&nbsp;&nbsp;|&nbsp;&nbsp;All Roads Lead Home
          </p>
          <div className="hero-actions">
            <Link href="/book-now" className="btn-primary">Book Your Detail</Link>
            <a href="#services" className="btn-ghost">View Services</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section-shell">
        <div className="container about-grid">
          <div className="about-copy">
            <h2 className="about-headline">
              #DETAILING<br />
              <em>THE MH WAY</em>
            </h2>
            <ul className="about-list">
              <li>
                <strong>Recognised &amp; Trusted</strong>
                <span>A reputation built on results — real customers, real transformations, real standards.</span>
              </li>
              <li>
                <strong>Personalised Car Care</strong>
                <span>Every vehicle is treated as if it were my own. You stay in the loop from drop-off to collection.</span>
              </li>
              <li>
                <strong>Weekend Availability</strong>
                <span>Available every Saturday and Sunday, 11 AM – 6 PM, from a purpose-built setup in the UK.</span>
              </li>
            </ul>
            <div className="about-actions">
              <Link href="/book-now" className="btn-primary">Book a Detail</Link>
              <a href="#contact" className="btn-outline">Get in Touch</a>
            </div>
          </div>
          <div className="about-image-wrap">
            <div className="about-deco-shape" aria-hidden="true" />
            <img
              src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Detailer polishing car"
              className="about-img"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services section-shell">
        <div className="services-bg-overlay" aria-hidden="true" />
        <div className="container services-layout">
          <div className="services-header">
            <h2>M.H DETAILZ&apos;&nbsp;SERVICES</h2>
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
            <div className="service-panel">
              <div className="service-panel-top">
                <span className="service-panel-price">{active.price}</span>
                {active.tag && <span className="service-tag">{active.tag}</span>}
              </div>
              <h3>{active.label}</h3>
              <p className="service-desc">{active.description}</p>
              <ul className="service-points">
                {active.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Link href="/book-now" className="btn-primary service-cta">
                {active.label} &rarr;
              </Link>
            </div>
          </div>
        </div>
        <p className="services-note container">
          Prices may vary depending on vehicle type and condition.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials section-shell">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Reviews</p>
            <h2>YOUR <em>FEEDBACK</em></h2>
            <div className="section-rule" />
          </div>
        </div>
        <div className="testimonials-track">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="testi-card">
              <span className="testi-quote">&ldquo;</span>
              <p>{t.text}</p>
              <strong>{t.name}</strong>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section section-shell">
        <div className="container contact-grid">
          <div className="contact-copy">
            <h2>REACH <em>OUT</em></h2>
            <p>Have a question or want a quote? I&apos;d love to hear from you.</p>
            <p>
              Fill out the form and I&apos;ll get back to you as soon as possible.
              During busy periods lead times may be 2–4 weeks — I appreciate your patience.
            </p>
            <p>
              Feel free to include photos — the more detail you give, the better the
              quote I can provide.
            </p>
            <p className="contact-avail">Sat &amp; Sun · 11:00 AM – 6:00 PM</p>
          </div>
          <div className="contact-form-outer">
            <div className="contact-deco-l" aria-hidden="true" />
            <div className="contact-deco-r" aria-hidden="true" />
            <form className="contact-form">
              <label>
                Full Name
                <input type="text" name="name" required />
              </label>
              <div className="form-row">
                <label>
                  Email
                  <input type="email" name="email" required />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" />
                </label>
              </div>
              <label>
                Vehicle Make &amp; Model
                <input type="text" name="vehicle" />
              </label>
              <label>
                Message
                <textarea name="message" rows={4} />
              </label>
              <button type="submit" className="btn-primary form-submit">
                Send &rarr;
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
