import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/avant-apres", label: "Avant / Après" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/temoignages", label: "Témoignages" },
  { to: "/a-propos", label: "À Propos" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo">
            <img src="/logo.png" alt="RAMELEC" className="navbar__logo-img" />
          </Link>
          <div className="navbar__nav">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`navbar__link${pathname === l.to ? " navbar__link--active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn btn--amber navbar__cta">Devis Gratuit</Link>
          </div>
          <button
            className={`navbar__burger${open ? " navbar__burger--open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      {open && (
        <div className="navbar__mobile">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`navbar__mobile-link${pathname === l.to ? " navbar__mobile-link--active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="navbar__mobile-cta" onClick={() => setOpen(false)}>
            Devis Gratuit →
          </Link>
        </div>
      )}
    </>
  );
}
