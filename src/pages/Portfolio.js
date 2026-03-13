import React, { useState } from "react";
import "./Portfolio.css";

const categories = ["Tous", "Résidentiel", "Commercial", "Tableau électrique", "Éclairage"];

const projects = [
  {
    title: "Rénovation électrique complète",
    category: "Résidentiel",
    location: "Paris 19e",
    desc: "Remise aux normes intégrale d'un appartement haussmannien de 85m². Nouveau tableau, 12 circuits, 42 prises.",
    tags: ["Rénovation", "NF C 15-100", "85m²"],
    icon: "🏠",
  },
  {
    title: "Installation bureaux open space",
    category: "Commercial",
    location: "Pantin (93)",
    desc: "Câblage électrique et data d'un espace de coworking de 300m². 80 postes de travail alimentés.",
    tags: ["Bureaux", "Courant faible", "300m²"],
    icon: "🏢",
  },
  {
    title: "Remplacement tableau électrique",
    category: "Tableau électrique",
    location: "Montreuil (93)",
    desc: "Remplacement d'un tableau vétuste des années 70. Installation d'un tableau 3 rangées avec différentiels 30mA.",
    tags: ["Tableau", "Sécurité", "Conformité"],
    icon: "⚙️",
  },
  {
    title: "Éclairage LED restaurant",
    category: "Éclairage",
    location: "Bobigny (93)",
    desc: "Conception et installation d'un éclairage d'ambiance LED pour un restaurant de 120 couverts. Variation lumineuse.",
    tags: ["LED", "Ambiance", "Commercial"],
    icon: "💡",
  },
  {
    title: "Logement neuf — maison individuelle",
    category: "Résidentiel",
    location: "Le Raincy (93)",
    desc: "Installation électrique complète d'une maison neuve de 140m². Du câblage à la pose des équipements.",
    tags: ["Neuf", "Maison", "140m²"],
    icon: "🏠",
  },
  {
    title: "Mise aux normes ERP",
    category: "Commercial",
    location: "Aubervilliers (93)",
    desc: "Mise en conformité électrique d'un établissement recevant du public (commerce alimentaire). Conformité CONSUEL.",
    tags: ["ERP", "Conformité", "Commerce"],
    icon: "🏪",
  },
  {
    title: "Domotique & éclairage intelligent",
    category: "Éclairage",
    location: "Paris 20e",
    desc: "Installation d'un système d'éclairage domotique dans un appartement. Contrôle via smartphone.",
    tags: ["Domotique", "Smart home", "LED"],
    icon: "📱",
  },
  {
    title: "Tableau divisionnaire atelier",
    category: "Tableau électrique",
    location: "Saint-Denis (93)",
    desc: "Installation d'un tableau divisionnaire pour un atelier de menuiserie. Alimentation des machines-outils triphasées.",
    tags: ["Industriel", "Triphasé", "Atelier"],
    icon: "🔌",
  },
  {
    title: "Rénovation immeuble 6 logements",
    category: "Résidentiel",
    location: "Pantin (93)",
    desc: "Mise aux normes électriques de 6 appartements dans un immeuble de 1960. Parties communes incluses.",
    tags: ["Immeuble", "Parties communes", "NF C 15-100"],
    icon: "🏗️",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered = activeCategory === "Tous"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="portfolio-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-label">Notre travail</p>
          <h1 className="page-hero-title">Nos Réalisations</h1>
          <p className="page-hero-subtitle">
            Un aperçu de nos chantiers récents en Île-de-France. Chaque projet est réalisé avec le même niveau d'exigence.
          </p>
        </div>
      </section>

      {/* Filters — own bar, clearly separated from hero */}
      <div className="portfolio-filters-bar">
        <div className="container">
          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`portfolio-filter-btn${activeCategory === cat ? " portfolio-filter-btn--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="section">
        <div className="container">
          <div className="portfolio-grid">
            {filtered.map((p, i) => (
              <div className="portfolio-card" key={i}>
                <div className="portfolio-card__icon">{p.icon}</div>
                <div className="portfolio-card__category">{p.category}</div>
                <h3 className="portfolio-card__title">{p.title}</h3>
                <p className="portfolio-card__location">📍 {p.location}</p>
                <p className="portfolio-card__desc">{p.desc}</p>
                <div className="portfolio-card__tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="portfolio-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--dark" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title" style={{ color: "var(--white)" }}>
            Votre projet sera notre prochaine réalisation.
          </h2>
          <p className="section-subtitle" style={{ margin: "16px auto 32px" }}>
            Contactez-nous pour discuter de votre projet et obtenir un devis gratuit.
          </p>
          <a href="/contact" className="btn btn-primary">Nous contacter →</a>
        </div>
      </section>
    </div>
  );
}
