import React, { useState } from "react";
import "./Contact.css";

const services = [
  "Installation résidentielle",
  "Installation commerciale",
  "Tableau électrique",
  "Éclairage",
  "Dépannage / Urgence",
  "Rénovation électrique",
  "Autre",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Une erreur est survenue.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Impossible de joindre le serveur. Veuillez réessayer.");
    }
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-label">Parlons de votre projet</p>
          <h1 className="page-hero-title">Contactez RAMELEC</h1>
          <p className="page-hero-subtitle">
            Devis gratuit, sans engagement. Nous répondons à toutes vos demandes sous 24h ouvrées.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          {/* Form */}
          <div className="contact-form-wrap">
            <h2 className="contact-form-title">Demande de devis gratuit</h2>
            <p className="contact-form-subtitle">
              Remplissez ce formulaire et nous vous recontactons rapidement.
            </p>

            {status === "success" ? (
              <div className="contact-success">
                <span className="contact-success__icon">✅</span>
                <h3>Message envoyé !</h3>
                <p>Merci pour votre demande. Nous vous recontacterons dans les plus brefs délais.</p>
                <button className="btn btn-primary" onClick={() => setStatus("idle")} style={{ marginTop: 20 }}>
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jean@exemple.fr"
                      required
                    />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="phone">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="06 XX XX XX XX"
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="service">Type de service</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Sélectionnez un service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="contact-form__field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    rows={6}
                    required
                  />
                </div>

                {status === "error" && (
                  <div className="contact-error">⚠️ {errorMsg}</div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === "sending"}
                  style={{ width: "100%", justifyContent: "center", padding: "16px" }}
                >
                  {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande →"}
                </button>

                <p className="contact-form__gdpr">
                  En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour traiter votre demande. Voir notre <a href="/confidentialite">politique de confidentialité</a>.
                </p>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="contact-info">
            <div className="contact-info-card">
              <h3 className="contact-info-card__title">Nos coordonnées</h3>
              <div className="contact-info-items">
                <div className="contact-info-item">
                  <span className="contact-info-item__icon">📍</span>
                  <div>
                    <strong>Adresse</strong>
                    <span>3 Rue Lavoisier<br />93500 Pantin, France</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-item__icon">📞</span>
                  <div>
                    <strong>Téléphone</strong>
                    <a href="tel:+33760493967">+33 7 60 49 39 67</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-item__icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:ramelec.ang@gmail.com">ramelec.ang@gmail.com</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-item__icon">🕒</span>
                  <div>
                    <strong>Horaires</strong>
                    <span>Lundi – Vendredi : 8h00 – 18h00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="contact-map">
              <div className="contact-map__placeholder">
                <span>📍</span>
                <p>3 Rue Lavoisier, 93500 Pantin</p>
                <a
                  href="https://maps.google.com/?q=3+Rue+Lavoisier+93500+Pantin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                  style={{ fontSize: 13 }}
                >
                  Voir sur Google Maps
                </a>
              </div>
              {/* Uncomment to embed real map:
              <iframe
                title="RAMELEC location"
                src="https://www.google.com/maps/embed?pb=!1m18!..."
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              /> */}
            </div>

            <div className="contact-zone-card">
              <h4>Zone d'intervention</h4>
              <p>Pantin, Paris et toute l'Île-de-France (75, 92, 93, 94, 95, 91, 77, 78)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
