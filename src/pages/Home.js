import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AVANT_APRES_PROJECTS } from "../data/projects";
import "./Home.css";

const ELEC_SERVICES = [
  { icon: "🏠", name: "Installation Résidentielle", desc: "Systèmes électriques complets pour appartements et maisons." },
  { icon: "🏢", name: "Installation Commerciale", desc: "Électricité pro pour bureaux, commerces et locaux industriels.", highlight: true },
  { icon: "⚙️", name: "Tableau Électrique", desc: "Installation, mise à la norme et remplacement de tableaux." },
  { icon: "💡", name: "Éclairage & Domotique", desc: "LED, spots, variation de luminosité, contrôle smartphone." },
  { icon: "🔧", name: "Dépannage & Urgence", desc: "Intervention rapide, diagnostic précis sous 48h." },
  { icon: "🏗️", name: "Rénovation Électrique", desc: "Mise aux normes complète dans les bâtiments anciens." },
];

const TCE_SERVICES = [
  { icon: "⚡", name: "Électricité", desc: "Installation complète, mise aux normes NF C 15-100." },
  { icon: "🪵", name: "Parquet & Sol", desc: "Pose parquet massif, carrelage, stratifié, vinyle.", highlight: true },
  { icon: "🏠", name: "Rénovation Complète", desc: "Appartement ou maison, de A à Z. Un seul artisan." },
  { icon: "🎨", name: "Peinture & Enduits", desc: "Préparation, enduits lisses, peinture toutes surfaces." },
  { icon: "🚿", name: "Salle de bain", desc: "Rénovation complète clé en main — plomberie, carrelage, élec." },
  { icon: "👨‍🍳", name: "Cuisine", desc: "Installation cuisine, crédence, alimentation électrique." },
];

export default function Home() {
  const [tab, setTab] = useState("elec");
  const services = tab === "elec" ? ELEC_SERVICES : TCE_SERVICES;
  const preview = AVANT_APRES_PROJECTS.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="home-hero">
        <div className="container">
          <span className="section-label">⚡ Électricité & Rénovation TCE — Pantin, Île-de-France</span>
          <h1 className="home-hero__title">
            Votre expert en travaux<br />
            <em>en Île-de-France.</em>
          </h1>
          <p className="home-hero__sub">
            Nous réalisons vos travaux d'électricité et de rénovation complète (Tous Corps d'État)
            avec sérieux, rapidité et respect des normes. Satisfaction client garantie.
          </p>
          <div className="home-hero__pills">
            <span className="hero-pill">✓ Travail soigné & professionnel</span>
            <span className="hero-pill">✓ Respect des normes</span>
            <span className="hero-pill">✓ Intervention rapide 48h</span>
            <span className="hero-pill">✓ Devis 100% gratuit</span>
            <span className="hero-pill">✓ Satisfaction garantie</span>
          </div>
          <div className="home-hero__btns">
            <Link to="/contact" className="btn btn--amber">Devis Gratuit →</Link>
            <Link to="/avant-apres" className="btn btn--outline-white">Voir nos réalisations</Link>
          </div>
          <div className="home-hero__stats">
            <div className="hstat"><span className="hstat__n">100%</span><span className="hstat__l">Conformes NF C 15-100</span></div>
            <div className="hstat__div" />
            <div className="hstat"><span className="hstat__n">48h</span><span className="hstat__l">Délai d'intervention</span></div>
            <div className="hstat__div" />
            <div className="hstat"><span className="hstat__n">TCE</span><span className="hstat__l">Tous Corps d'État</span></div>
            <div className="hstat__div" />
            <div className="hstat"><span className="hstat__n">IDF</span><span className="hstat__l">Île-de-France</span></div>
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <div className="trust-banner">
        <div className="container trust-banner__inner">
          <span className="trust-item">✓ Travail soigné & professionnel</span>
          <span className="trust-item">✓ Respect des délais</span>
          <span className="trust-item">✓ Devis gratuit & transparent</span>
          <span className="trust-item">✓ Satisfaction client garantie</span>
          <span className="trust-item">✓ Normes NF C 15-100</span>
        </div>
      </div>

      {/* SERVICES */}
      <section className="home-sec">
        <div className="container">
          <div className="home-sec__hdr">
            <div>
              <span className="section-label">Nos domaines d'expertise</span>
              <h2 className="section-title">Électricité & Rénovation TCE</h2>
              <p className="section-sub" style={{ maxWidth: 500 }}>
                Un seul interlocuteur pour tous vos travaux. Électricité, parquet, peinture, salle de bain, cuisine — nous gérons tout de A à Z.
              </p>
            </div>
            <Link to="/services" className="btn btn--outline">Voir tous →</Link>
          </div>

          <div className="svc-tabs">
            <button className={`svc-tab${tab === "elec" ? " svc-tab--on" : ""}`} onClick={() => setTab("elec")}>⚡ Électricité</button>
            <button className={`svc-tab svc-tab--tce${tab === "tce" ? " svc-tab--on" : ""}`} onClick={() => setTab("tce")}>🏗️ Rénovation TCE</button>
          </div>

          {tab === "tce" && (
            <div className="tce-banner">
              <span className="tce-tag">Nouveau — Tous Corps d'État</span>
              <div className="tce-banner__title">Rénovation complète — un seul artisan, zéro stress</div>
              <p className="tce-banner__sub">
                Confiez-nous l'intégralité de votre chantier. Nous coordonnons tout : électricité, parquet,
                peinture, salle de bain, cuisine. Résultat soigné, délais respectés, satisfaction garantie.
              </p>
            </div>
          )}

          <div className="svc-grid">
            {services.map((s, i) => (
              <div key={i} className={`svc-card${s.highlight ? " svc-card--hl" : ""}`}>
                <span className="svc-icon">{s.icon}</span>
                <div className="svc-name">{s.name}</div>
                <p className="svc-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          {tab === "tce" && (
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <Link to="/avant-apres" className="btn btn--amber">Voir nos photos Avant / Après TCE →</Link>
            </div>
          )}
        </div>
      </section>

      {/* WHY US */}
      <section className="home-sec home-sec--dark">
        <div className="container">
          <div className="home-sec__hdr-c">
            <span className="section-label">Pourquoi nous choisir ?</span>
            <h2 className="section-title section-title--white">La différence RAMELEC</h2>
            <p className="section-sub section-sub--slate" style={{ textAlign: "center", maxWidth: 480 }}>
              Nous réalisons vos travaux avec sérieux, rapidité et respect des normes. Votre satisfaction est notre priorité absolue.
            </p>
          </div>
          <div className="reasons-grid">
            {[
              { icon: "✅", name: "Travail soigné", desc: "Finitions impeccables, chantier propre, respect des délais à chaque intervention." },
              { icon: "⚡", name: "Intervention rapide", desc: "Réponse sous 24h, intervention sous 48h sur toute l'Île-de-France." },
              { icon: "📋", name: "Devis 100% gratuit", desc: "Devis détaillé, transparent, sans engagement et sans frais cachés." },
              { icon: "🏆", name: "Satisfaction garantie", desc: "Nos clients nous recommandent. Travail garanti, assurance décennale." },
            ].map((r, i) => (
              <div key={i} className="reason">
                <span className="reason__icon">{r.icon}</span>
                <div className="reason__name">{r.name}</div>
                <p className="reason__desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVANT/APRÈS PREVIEW */}
      <section className="home-sec home-sec--grey">
        <div className="container">
          <div className="home-sec__hdr">
            <div>
              <span className="section-label">La preuve par l'image</span>
              <h2 className="section-title">Nos réalisations Avant / Après</h2>
              <p className="section-sub">
                Photos réelles de nos chantiers. Pas de stock photos — ce sont nos propres travaux en Île-de-France.
              </p>
            </div>
            <Link to="/avant-apres" className="btn btn--outline">Tout voir →</Link>
          </div>
          <div className="preview-grid">
            {preview.map(proj => (
              <Link to="/avant-apres" key={proj.id} className="preview-card">
                <div className="preview-panels">
                  <div className="preview-panel" style={{ background: proj.bcolor }}>
                    <span className="preview-panel__icon">{proj.avant[0].icon}</span>
                    <span className="preview-label preview-label--avant">AVANT</span>
                  </div>
                  <div className="preview-arrow">→</div>
                  <div className="preview-panel" style={{ background: proj.acolor }}>
                    <span className="preview-panel__icon">{proj.apres[0].icon}</span>
                    <span className="preview-label preview-label--apres">APRÈS</span>
                  </div>
                </div>
                <div className="preview-info">
                  <div className="preview-cat">{proj.cat}</div>
                  <div className="preview-title">{proj.title}</div>
                  <div className="preview-loc">📍 {proj.loc}</div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link to="/avant-apres" className="btn btn--amber">Voir tous les projets Avant / Après →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="container">
          <span className="section-label">Prêt à démarrer ?</span>
          <h2 className="home-cta__title">Besoin d'un électricien ou d'une rénovation en Île-de-France ?</h2>
          <p className="home-cta__sub">Devis gratuit et sans engagement. Réponse sous 24h. Satisfaction garantie.</p>
          <Link to="/contact" className="btn btn--amber">Demander un devis gratuit</Link>
        </div>
      </section>
    </>
  );
}
