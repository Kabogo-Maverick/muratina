import "../styles/footer.css";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>Nektar Ratish</h2>
          <p>
            Premium Muratina experience — crafted with tradition,
            delivered with modern speed.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Explore</h4>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/orders">Orders</a>
          <a href="/dashboard">Dashboard</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Kiambu, Kenya</p>
          <p>+254 700 000 000</p>
          <p>support@nektarratish.com</p>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <h4>Follow Us</h4>

          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nektar Ratish. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;