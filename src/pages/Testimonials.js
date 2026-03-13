import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Marie L.",
    location: "Paris 19e",
    service: "Rénovation électrique complète",
    rating: 5,
    text: "Équipe très professionnelle, travail soigné et propre. Le tableau électrique a été remplacé rapidement et toute l'installation mise aux normes. Je recommande vivement RAMELEC !",
    date: "Janvier 2025",
  },
  {
    name: "Karim B.",
    location: "Pantin (93)",
    service: "Installation tableau électrique",
    rating: 5,
    text: "Devis reçu rapidement, prix transparent, intervention dans les délais. Technicien compétent et à l'écoute. Je referai appel à eux sans hésitation.",
    date: "Novembre 2024",
  },
  {
    name: "Société Immotec",
    location: "Aubervilliers (93)",
    service: "Installation commerciale",
    rating: 5,
    text: "RAMELEC a réalisé l'installation électrique complète de nos nouveaux bureaux. Travail impeccable, respect du planning et du budget. Partenaire de confiance.",
    date: "Octobre 2024",
  },
  {
    name: "Sophie M.",
    location: "Le Pré-Saint-Gervais (93)",
    service: "Dépannage électrique",
    rating: 5,
    text: "Panne en pleine semaine, intervention le lendemain matin. Diagnostic précis, réparation rapide. Très satisfaite du service et de la réactivité.",
    date: "Décembre 2024",
  },
  {
    name: "Marc D.",
    location: "Montreuil (93)",
    service: "Éclairage LED",
    rating: 5,
    text: "Installation d'un éclairage LED dans tout l'appartement. Résultat magnifique, économies d'énergie garanties. Excellent rapport qualité-prix.",
    date: "Septembre 2024",
  },
  {
    name: "Restaurant Le Jardin",
    location: "Bobigny (93)",
    service: "Mise aux normes ERP",
    rating: 5,
    text: "Mise aux normes électriques de notre restaurant pour notre ouverture. Travail réalisé en dehors des heures d'ouverture, sans perturber notre activité. Parfait.",
    date: "Août 2024",
  },
];

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "star star--filled" : "star"}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="testimonials-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-label">Ils nous font confiance</p>
          <h1 className="page-hero-title">Témoignages Clients</h1>
          <p className="page-hero-subtitle">
            Découvrez les retours de nos clients particuliers et professionnels en Île-de-France.
          </p>
        </div>
      </section>

      {/* Rating summary */}
      <section className="section section--grey">
        <div className="container testimonials-summary">
          <div className="testimonials-rating">
            <span className="testimonials-rating__score">5.0</span>
            <div>
              <Stars count={5} />
              <p>Note moyenne — {testimonials.length} avis vérifiés</p>
            </div>
          </div>
          <div className="testimonials-bars">
            {[5, 4, 3, 2, 1].map((n) => (
              <div className="testimonials-bar-row" key={n}>
                <span>{n}★</span>
                <div className="testimonials-bar">
                  <div
                    className="testimonials-bar__fill"
                    style={{ width: n === 5 ? "100%" : "0%" }}
                  />
                </div>
                <span>{n === 5 ? testimonials.length : 0}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="section">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <Stars count={t.rating} />
                <blockquote className="testimonial-card__text">"{t.text}"</blockquote>
                <div className="testimonial-card__footer">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong className="testimonial-card__name">{t.name}</strong>
                    <span className="testimonial-card__meta">{t.location} · {t.service}</span>
                    <span className="testimonial-card__date">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark" style={{ textAlign: "center" }}>
        <div className="container">
          <p className="section-label">Rejoignez nos clients satisfaits</p>
          <h2 className="section-title" style={{ color: "var(--white)" }}>
            Votre projet mérite le meilleur.
          </h2>
          <p className="section-subtitle" style={{ margin: "16px auto 32px" }}>
            Contactez RAMELEC pour un devis gratuit et rapide.
          </p>
          <a href="/contact" className="btn btn-primary">Demander un devis →</a>
        </div>
      </section>
    </div>
  );
}
