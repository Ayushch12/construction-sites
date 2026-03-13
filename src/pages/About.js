import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const values = [
  { icon: "🎯", title: "Qualité", desc: "Chaque intervention est réalisée avec soin, dans le respect des normes électriques en vigueur (NF C 15-100)." },
  { icon: "🤝", title: "Confiance", desc: "Nous construisons des relations durables avec nos clients, fondées sur la transparence et le respect de nos engagements." },
  { icon: "⚡", title: "Réactivité", desc: "Disponibles et réactifs, nous savons que vos projets ont des délais. Nous intervenons rapidement." },
  { icon: "🔒", title: "Sécurité", desc: "La sécurité est au cœur de notre métier. Nous ne faisons aucun compromis sur la protection des personnes et des biens." },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-label">Notre histoire</p>
          <h1 className="page-hero-title">À Propos de RAMELEC</h1>
          <p className="page-hero-subtitle">
            Une entreprise jeune, ambitieuse et professionnelle, au service de votre installation électrique en Île-de-France.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container about-story">
          <div className="about-story__text">
            <p className="section-label">Notre histoire</p>
            <h2 className="section-title">RAMELEC, née de la passion de l'électricité</h2>
            <p style={{ color: "var(--text-light)", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              RAMELEC est une société par actions simplifiée (SAS) fondée et basée à Pantin, en Seine-Saint-Denis, au cœur de l'Île-de-France. Notre vocation : réaliser des travaux d'installation électrique de qualité dans tous types de locaux — résidentiels, commerciaux, industriels.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              Dès sa création, l'entreprise a mis la qualité d'exécution, la rigueur et le service client au centre de son développement. Chaque chantier est une opportunité de montrer notre savoir-faire et de renforcer la confiance que nos clients nous accordent.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: 16, lineHeight: 1.8 }}>
              Notre équipe de techniciens qualifiés intervient avec les outils et les méthodes les plus adaptés, dans le respect des normes électriques françaises et européennes.
            </p>
          </div>
          <div className="about-story__info-col">
            <div className="about-legal-card">
              <h3 className="about-legal-card__title">Informations légales</h3>
              <table className="about-legal-table">
                <tbody>
                  <tr>
                    <td>Raison sociale</td>
                    <td><strong>RAMELEC</strong></td>
                  </tr>
                  <tr>
                    <td>Forme juridique</td>
                    <td>SAS</td>
                  </tr>
                  <tr>
                    <td>SIREN</td>
                    <td>978 951 291</td>
                  </tr>
                  <tr>
                    <td>Code APE / NAF</td>
                    <td>43.21A</td>
                  </tr>
                  <tr>
                    <td>Activité</td>
                    <td>Travaux d'installation électrique dans tous locaux</td>
                  </tr>
                  <tr>
                    <td>Siège social</td>
                    <td>3 Rue Lavoisier<br />93500 Pantin, France</td>
                  </tr>
                  <tr>
                    <td>Région</td>
                    <td>Île-de-France</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section section--dark">
        <div className="container about-mission">
          <div>
            <p className="section-label">Notre mission</p>
            <h2 className="section-title" style={{ color: "var(--white)" }}>
              Électrifier vos projets,<br />sécuriser votre avenir.
            </h2>
            <p style={{ color: "var(--slate)", fontSize: 16, lineHeight: 1.8, maxWidth: 480, marginTop: 16 }}>
              Notre mission est simple : offrir à nos clients une prestation électrique de haut niveau, à un prix juste et transparent, dans les délais annoncés. Chaque intervention, petite ou grande, est traitée avec le même professionnalisme.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 32 }}>
              Travailler avec nous
            </Link>
          </div>
          <div className="about-mission__numbers">
            {[
              { num: "NF C 15-100", label: "Norme respectée" },
              { num: "IDF", label: "Zone d'intervention" },
              { num: "48h", label: "Délai d'intervention" },
              { num: "100%", label: "Satisfaction garantie" },
            ].map((stat) => (
              <div className="about-mission__stat" key={stat.label}>
                <span className="about-mission__stat-num">{stat.num}</span>
                <span className="about-mission__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--grey">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p className="section-label">Ce qui nous guide</p>
            <h2 className="section-title">Nos Valeurs</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <span className="value-card__icon">{v.icon}</span>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section">
        <div className="container about-trust">
          <p className="section-label">Pourquoi nous faire confiance ?</p>
          <h2 className="section-title">Ce qui fait la différence</h2>
          <div className="trust-grid">
            {[
              "Conformité totale aux normes françaises NF C 15-100",
              "Professionnels formés et habilités (habilitation électrique B2V, BR, BC)",
              "Devis gratuit, transparent et sans engagement",
              "Interventions propres : protection des sols, évacuation des déchets",
              "Attestation de conformité fournie après travaux",
              "Garantie décennale sur nos travaux",
              "Service client réactif et à l'écoute",
              "Couverture assurance responsabilité civile professionnelle",
            ].map((item, i) => (
              <div className="trust-item" key={i}>
                <span className="trust-item__check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
