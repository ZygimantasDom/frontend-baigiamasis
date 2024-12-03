import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "../scss/footer.scss";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="links-container">
        <a href="/contact" className="link">
          Susisiekite
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <FaFacebook className="icon" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <FaInstagram className="icon" />
        </a>
      </div>
      <p className="copyright-text">© 2024 ZD</p>
    </footer>
  );
}

export default Footer;
