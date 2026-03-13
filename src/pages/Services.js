import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const ELEC = [
  { icon: "🏠", name: "Installation Résidentielle", desc: "Conception et installation complète pour appartements et maisons.", features: ["Câblage complet du logement","Prises et interrupteurs","Points d'éclairage","Alimentation cuisine & SDB","Détecteur de fumée"] },
  { icon: "🏢", name: "Installation Commerciale", desc: "Bureaux, commerces, restaurants — infrastructure électrique complète.", features: ["Étude et dimensionnement","Courant fort & faible","Prises RJ45 et Data","Éclairage LED professionnel","Mise aux normes ERP"], hl: true },
  { icon: "⚙️", name: "Tableau Électrique", desc: "Installation ou remplacement pour une sécurité totale.", features: ["Installation neuve","Remplacement vétuste","Ajout de circuits","Mise en conformité NF C 15-100","Test et certification"] },
  { icon: "💡", name: "Éclairage & Domotique", desc: "Du spot simple au système connecté complet.", features: ["LED haute efficacité","Spots encastrés et saillie","Variation de luminosité","Détecteurs de présence","Contrôle smartphone"] },
  { icon: "🔧", name: "Dépannage & Urgence", desc: "Panne, disjoncteur, court-circuit — intervention rapide.", features: ["Diagnostic précis","Intervention sous 48h","Remplacement de composants","Traitement pannes répétitives","Rapport d'intervention"] },
  { icon: "🏗️", name: "Rénovation Électrique", desc: "Remise aux normes des bâtiments anciens.", features: ["Audit de l'existant","Remplacement des réseaux","Travaux en site occupé","Attestation de conformité"] },
];

const TCE = [
  { icon: "⚡", name: "Électricité complète", desc: "Installation, mise aux normes NF C 15-100, tableau neuf.", features: ["Câblage complet","Tableau électrique neuf","Mise aux normes","Attestation CONSUEL"] },
  { icon: "🪵", name: "Parquet & Sol", desc: "Pose de tous types de sols, finitions soignées.", features: ["Parquet massif / flottant","Carrelage & faïence","Stratifié & vinyle","Préparation du support","Plinthes et finitions"], hl: true },
  { icon: "🏠", name: "Rénovation Complète", desc: "Appartement ou maison, de A à Z. Un seul interlocuteur.", features: ["Démolition / cloisons","Coordination corps de métier","Finitions soignées","Prêt à habiter"] },
  { icon: "🎨", name: "Peinture & Enduits", desc: "Peinture intérieure, enduits lisses, papier peint.", features: ["Préparation des surfaces","Enduits de lissage","Peinture toutes surfaces","Finitions parfaites"] },
  { icon: "🚿", name: "Salle de bain", desc: "Rénovation complète salle de bain clé en main.", features: ["Plomberie complète","Carrelage & faïence","Électricité salle humide","Pose sanitaires","Douche à l'italienne"] },
  { icon: "👨‍🍳", name: "Cuisine", desc: "Installation cuisine, crédence, plan de travail.", features: ["Alimentation électrique","Carrelage / crédence","Pose meubles et équipements"] },
];

const PROCESS = [
  { n: "01", t: "Prise de contact", d: "Appelez-nous ou remplissez notre formulaire. Réponse sous 24h." },
  { n: "02", t: "Diagnostic", d: "Nous analysons vos besoins et évaluons le chantier sur place." },
  { n: "03", t: "Devis gratuit", d: "Devis clair, détaillé, transparent et sans engagement." },
  { n: "04", t: "Réalisation", d: "Intervention propre dans les délais convenus. Satisfaction garantie." },
];

export default function Services() {
  const [tab, setTab] = useState("elec");
  const services = tab === "elec" ? ELEC : TCE;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero__label">Nos domaines d'expertise</span>
          <h1 className="page-hero__title">Électricité & Rénovation TCE</h1>
          <p className="page-hero__sub">Un seul interlocuteur pour tous vos travaux. Électricité, parquet, peinture, salle de bain, cuisine — nous gérons tout de A à Z.</p>
        </div>
      </section>

      <section className="svc-page-sec">
        <div className="container">
          <div className="svc-tabs">
            <button className={`svc-tab${tab === "elec" ? " svc-tab--on" : ""}`} onClick={() => setTab("elec")}>⚡ Électricité</button>
            <button className={`svc-tab svc-tab--tce${tab === "tce" ? " svc-tab--on" : ""}`} onClick={() => setTab("tce")}>🏗️ Rénovation TCE</button>
          </div>

          {tab === "tce" && (
            <div className="tce-banner" style={{ marginBottom: 24 }}>
              <span className="tce-tag">Tous Corps d'État (TCE)</span>
              <div className="tce-banner__title">Rénovation complète — zéro stress, un seul artisan</div>
              <p className="tce-banner__sub">Vous n'avez pas à coordonner plusieurs artisans. Confiez-nous l'intégralité de votre projet. Électricité, parquet, peinture, salle de bain, cuisine — résultat soigné, délais respectés, satisfaction garantie.</p>
            </div>
          )}

          <div className="svc-full-grid">
            {services.map((s, i) => (
              <div key={i} className={`svc-full-card${s.hl ? " svc-full-card--hl" : ""}`}>
                <span className="svc-icon">{s.icon}</span>
                <div className="svc-name">{s.name}</div>
                <p className="svc-desc">{s.desc}</p>
                <ul className="svc-feats">
                  {s.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {tab === "tce" && (
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link to="/avant-apres" className="btn btn--amber">Voir nos photos Avant / Après TCE →</Link>
            </div>
          )}
        </div>
      </section>

      <section className="svc-page-sec" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span className="section-label">Comment ça marche ?</span>
            <h2 className="section-title">Notre processus</h2>
          </div>
          <div className="proc-grid">
            {PROCESS.map((p, i) => (
              <div key={i} className="proc-step">
                <div className="proc-num">{p.n}</div>
                <div className="proc-title">{p.t}</div>
                <p className="proc-desc">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="container">
          <span className="section-label">Prêt à démarrer ?</span>
          <h2 className="section-title section-title--white" style={{ marginBottom: 12 }}>Un projet électricité ou rénovation ?</h2>
          <p className="section-sub section-sub--slate" style={{ maxWidth: 420, margin: "0 auto 28px" }}>Devis gratuit, sans engagement. Satisfaction client garantie.</p>
          <Link to="/contact" className="btn btn--amber">Demander un devis gratuit →</Link>
        </div>
      </section>
    </>
  );
}
