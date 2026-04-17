import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-overlay" aria-hidden="true" />

      <div className="container footer-main">

        {/* Col 1 — Brand */}
        <div className="footer-col footer-brand-col">
          <img src="/logo.png" alt="M.H Detailz" className="footer-logo-img" />
          <p className="footer-brand-desc">
            Premium weekend car detailing across the UK. Making every car shine while giving back quality on every job.
          </p>
          <p className="footer-brand-note">Weekends Only &bull; 11 AM – 6 PM</p>
          <p className="footer-brand-note">M.H DETAILZ</p>
          <div className="footer-socials">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.2.1 4.7 1.7 4.8 4.8.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.1-1.6 4.7-4.8 4.8-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1C4 21.4 2.5 19.8 2.4 16.7c-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8C2.5 4 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 2.9.3.3 2.9.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9C.3 21.1 2.9 23.7 7.1 23.9 8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.2-.2 6.8-2.8 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9C23.7 2.9 21.1.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
            </a>
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#about">About Us</Link></li>
            <li><Link href="/#gallery">Gallery</Link></li>
            <li><Link href="/book-now">Book Now</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/#services">Full Detail – £60</Link></li>
            <li><Link href="/#services">Mini Valet – £40</Link></li>
            <li><Link href="/#services">Full Interior – £25</Link></li>
            <li><Link href="/#services">Full Exterior – £25</Link></li>
            <li style={{ marginTop: "0.6rem" }}><Link href="/book-now" className="footer-cta-link">Book Your Detail &rarr;</Link></li>
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div className="footer-col footer-contact-col">
          <h4>Contact</h4>
          <ul>
            <li className="footer-contact-item">
              <span className="footer-contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>
              </span>
              <a href="tel:07440771820">07440 771820</a>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </span>
              <a href="mailto:mhdetailz6@gmail.com">mhdetailz6@gmail.com</a>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </span>
              <span>UK &amp; Surrounding Areas</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} M.H Detailz. All Rights Reserved. Made &amp; Designed by <a href="/" style={{ color: "var(--accent)", fontWeight: 700 }}>M.H Detailz</a></p>
        <div className="footer-bottom-links">
          <Link href="/">Home</Link>
          <Link href="/book-now">Book Now</Link>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

