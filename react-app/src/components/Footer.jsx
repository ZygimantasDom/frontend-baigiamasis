import React from "react";
import { Link } from "react-router-dom";
import "../scss/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Kontaktai */}
        <div className="footer-section">
          <h3>Kontaktai</h3>
          <p>Adresas: Vilniaus g. 10, Vilnius</p>
          <p>Telefonas: +370 612 34567</p>
          <p>El. paštas: info@masazas.lt</p>
        </div>

        {/* Greitos nuorodos */}
        <div className="footer-section">
          <h3>Greitos nuorodos</h3>
          <ul>
            <li>
              <Link to="/about-us">Apie mus</Link>
            </li>
            <li>
              <Link to="/services">Paslaugos</Link>
            </li>
            <li>
              <Link to="/contact">Kontaktai</Link>
            </li>
          </ul>
        </div>

        {/* Socialiniai tinklai */}
        <div className="footer-section">
          <h3>Sekite mus</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/facebook-icon.png" alt="Facebook" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/instagram-icon.png" alt="Instagram" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/twitter-icon.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      {/* Autorinės teisės */}
      <div className="footer-copyright">
        <p>
          © 2024 Masažas. Visos teisės saugomos. |{" "}
          <Link to="/privacy-policy">Privatumo politika</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
