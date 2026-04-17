import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-bg-overlay" aria-hidden="true" />

      <div className="container footer-main">

        {/* Col 1 — Get In Touch */}
        <div className="footer-col footer-touch-col">
          <p className="footer-heading">Get In Touch</p>
          <ul className="footer-touch-list">
            <li>
              <span className="footer-touch-label">Phone</span>
              <a href="tel:07440771820" className="footer-touch-value">07440 771820</a>
            </li>
            <li>
              <span className="footer-touch-label">Mobile</span>
              <a href="tel:07440771820" className="footer-touch-value">07440 771820</a>
            </li>
            <li className="footer-touch-spacer" />
            <li>
              <span className="footer-touch-label">Email</span>
              <a href="mailto:mhdetailz6@gmail.com" className="footer-touch-value">mhdetailz6@gmail.com</a>
            </li>
            <li>
              <span className="footer-touch-label">Appointments</span>
              <a href="#contact" className="footer-touch-value">UK Wide</a>
            </li>
          </ul>
        </div>

        {/* Col 2 — Services */}
        <div className="footer-col footer-services-col">
          <p className="footer-heading">MH Services</p>
          <ul className="footer-services-list">
            <li><Link href="/#services">Full Detail</Link></li>
            <li><Link href="/#services">Mini Valet</Link></li>
            <li><Link href="/#services">Full Interior</Link></li>
            <li><Link href="/#services">Full Exterior</Link></li>
          </ul>
        </div>

        {/* Col 3 — Social + Wordmark */}
        <div className="footer-col footer-brand-col">
          <div className="footer-social-row">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-btn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.2.1 4.7 1.7 4.8 4.8.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.1-1.6 4.7-4.8 4.8-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1C4 21.4 2.5 19.8 2.4 16.7c-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8C2.5 4 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 2.9.3.3 2.9.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9C.3 21.1 2.9 23.7 7.1 23.9 8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.2-.2 6.8-2.8 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9C23.7 2.9 21.1.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/></svg>
            </a>
          </div>
          <p className="footer-wordmark"><strong>MH</strong>DETAILZ</p>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} M.H Detailz All Rights Reserved |{" "}
            <Link href="/">Privacy</Link> | <a href="https://mhdetailz.co.uk">Website</a>
          </p>
        </div>

      </div>
    </footer>
  );
}


