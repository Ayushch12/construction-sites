import React from "react";
import "./Legal.css";

export default function MentionsLegales() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-label">Informations légales</p>
          <h1 className="page-hero-title">Mentions Légales</h1>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <div className="legal-section">
            <h2>1. Éditeur du site</h2>
            <p>Le présent site internet est édité par la société :</p>
            <ul>
              <li><strong>Raison sociale :</strong> RAMELEC</li>
              <li><strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)</li>
              <li><strong>SIREN :</strong> 978 951 291</li>
              <li><strong>Code APE / NAF :</strong> 43.21A — Travaux d'installation électrique dans tous locaux</li>
              <li><strong>Siège social :</strong> 3 Rue Lavoisier, 93500 Pantin, France</li>
              <li><strong>Email :</strong> <a href="mailto:ramelec.ang@gmail.com">ramelec.ang@gmail.com</a></li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>2. Directeur de la publication</h2>
            <p>Le directeur de la publication est le représentant légal de la société RAMELEC SAS.</p>
          </div>

          <div className="legal-section">
            <h2>3. Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <ul>
              <li><strong>Société :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
              <li><strong>Site :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>4. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, etc.) est la propriété exclusive de RAMELEC SAS, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation de ces contenus, sans autorisation préalable écrite de RAMELEC SAS, est strictement interdite.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Limitation de responsabilité</h2>
            <p>
              RAMELEC SAS s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur ce site. Toutefois, RAMELEC SAS ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site. En conséquence, RAMELEC SAS décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers des sites internet tiers. RAMELEC SAS n'a aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu. L'existence de ces liens ne constitue pas une approbation de leur contenu.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Contact</h2>
            <p>
              Pour toute question relative au présent site, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:ramelec.ang@gmail.com">ramelec.ang@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
