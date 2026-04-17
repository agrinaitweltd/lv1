import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const services = [
  {
    title: "Most Popular - Full Detail",
    price: "£60",
    points: [
      "Full exterior wash & polish",
      "Interior deep clean",
      "Leather/fabric treatment",
      "Tyre & trim dressing",
    ],
    description:
      "Complete interior and exterior detailing including clay bar, polish, wax, and glass treatment.",
    featured: true,
  },
  {
    title: "Mini Valet",
    price: "£40",
    points: ["Exterior wash", "Interior wipe down", "Maintenance focused"],
    description: "Perfect for keeping your vehicle fresh between full details.",
  },
  {
    title: "Full Interior",
    price: "£25",
    points: ["Seats deep clean", "Carpets refreshed", "Dashboard detailed"],
    description: "A complete interior reset for your daily drive.",
  },
  {
    title: "Full Exterior",
    price: "£25",
    points: ["Snow foam wash", "Polish enhancement", "Protection layer"],
    description: "Gloss and protection that lifts your paintwork instantly.",
  },
];

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/4674343/pexels-photo-4674343.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Black car after detailing",
  },
  {
    src: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "White BMW being detailed",
  },
  {
    src: "https://images.pexels.com/photos/6873088/pexels-photo-6873088.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Interior mat cleaning",
  },
  {
    src: "https://images.pexels.com/photos/415945/pexels-photo-415945.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Grey Toyota after detailing",
  },
  {
    src: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "White Audi after detailing",
  },
];

export default function Home() {
  return (
    <main>
      <Header currentPath="/" />

      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content fade-in-up">
          <p className="eyebrow">M.H Detailz</p>
          <h1>Premium Car Detailing</h1>
          <p className="hero-subtext">
            Professional detailing services that make your vehicle shine like new.
            Experience the M.H Detailz difference.
          </p>
          <p className="hero-slogan">All Roads Lead Home</p>
          <div className="hero-actions">
            <Link href="/book-now" className="btn-primary">
              Book Your Detail
            </Link>
            <a href="#services" className="btn-secondary">
              View Services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="services section-shell">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2>Detail Packages Designed for Real Drivers</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article
                key={service.title}
                className={`service-card ${service.featured ? "featured" : ""}`}
              >
                <div className="service-title-row">
                  <h3>{service.title}</h3>
                  <span>{service.price}</span>
                </div>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <p className="service-note">
            Prices may vary depending on vehicle type and condition.
          </p>
        </div>
      </section>

      <section id="gallery" className="gallery section-shell">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Gallery</p>
            <h2>Results That Speak for Themselves</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <figure key={image.alt} className="gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner section-shell">
        <div className="container cta-banner-content">
          <div>
            <p className="eyebrow">Weekend Bookings</p>
            <h2>Book Your Detail Today</h2>
          </div>
          <Link href="/book-now" className="btn-primary">
            Book Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
