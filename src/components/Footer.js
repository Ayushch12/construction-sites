import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/logo.png" alt="RAMELEC" className="footer__logo-img" />
            </div>
            <p className="footer__tagline">
              Votre expert en électricité et rénovation TCE en Île-de-France.
              Travail soigné, respect des normes, satisfaction garantie.
            </p>
            <div className="footer__badges">
              <span className="footer__badge">NF C 15-100</span>
              <span className="footer__badge">TCE</span>
              <span className="footer__badge">IDF</span>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">Navigation</div>
            <Link to="/" className="footer__link">Accueil</Link>
            <Link to="/services" className="footer__link">Services</Link>
            <Link to="/avant-apres" className="footer__link">Avant / Après</Link>
            <Link to="/realisations" className="footer__link">Réalisations</Link>
            <Link to="/temoignages" className="footer__link">Témoignages</Link>
            <Link to="/a-propos" className="footer__link">À Propos</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">Services</div>
            <span className="footer__link">Installation électrique</span>
            <span className="footer__link">Tableau électrique</span>
            <span className="footer__link">Éclairage & Domotique</span>
            <span className="footer__link">Rénovation TCE</span>
            <span className="footer__link">Parquet & Sol</span>
            <span className="footer__link">Salle de bain</span>
            <span className="footer__link">Dépannage urgence</span>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">Contact</div>
            <span className="footer__contact-item">📍 3 Rue Lavoisier, 93500 Pantin</span>
            <span className="footer__contact-item">📞 +33 7 60 49 39 67</span>
            <span className="footer__contact-item">✉️ ramelec.ang@gmail.com</span>
            <span className="footer__contact-item">🕒 Lun–Ven : 8h–18h</span>
            <Link to="/contact" className="btn btn--amber footer__cta">Devis Gratuit →</Link>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} RAMELEC SAS — SIREN 978 951 291</span>
          <div className="footer__legal">
            <Link to="/mentions-legales" className="footer__legal-link">Mentions légales</Link>
            <Link to="/confidentialite" className="footer__legal-link">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
