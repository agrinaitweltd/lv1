import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>M.H Detailz</h3>
          <p>
            Premium UK car detailing for drivers who want a deep, glossy finish and
            a cabin that feels brand new.
          </p>
          <p className="slogan">All Roads Lead Home.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/book-now">Book Now</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>Phone: 07440 771820</li>
            <li>Email: mhdetailz6@gmail.com</li>
            <li>Sat & Sun, 11:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} M.H Detailz. All rights reserved.
      </p>
    </footer>
  );
}
