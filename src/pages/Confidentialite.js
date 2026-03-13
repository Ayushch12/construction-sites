import React from "react";
import "./Legal.css";

export default function Confidentialite() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-label">Protection des données</p>
          <h1 className="page-hero-title">Politique de Confidentialité</h1>
          <p className="page-hero-subtitle">Conformément au RGPD (UE) 2016/679</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <div className="legal-section">
            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données à caractère personnel collectées sur ce site est :
            </p>
            <ul>
              <li><strong>RAMELEC SAS</strong></li>
              <li>3 Rue Lavoisier, 93500 Pantin, France</li>
              <li>SIREN : 978 951 291</li>
              <li>Email : <a href="mailto:ramelec.ang@gmail.com">ramelec.ang@gmail.com</a></li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>2. Données collectées</h2>
            <p>Dans le cadre de l'utilisation de notre formulaire de contact, nous collectons les données suivantes :</p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Contenu du message</li>
              <li>Type de service souhaité (facultatif)</li>
            </ul>
            <p>Ces données sont nécessaires pour traiter votre demande de contact ou de devis.</p>
          </div>

          <div className="legal-section">
            <h2>3. Finalités du traitement</h2>
            <p>Les données collectées sont utilisées pour :</p>
            <ul>
              <li>Répondre à vos demandes de contact et de devis</li>
              <li>Vous informer sur nos services</li>
              <li>Améliorer notre service client</li>
            </ul>
            <p>Vos données ne sont jamais vendues à des tiers.</p>
          </div>

          <div className="legal-section">
            <h2>4. Base légale du traitement</h2>
            <p>
              Le traitement de vos données est fondé sur votre consentement (article 6, paragraphe 1, point a du RGPD), donné lors de la soumission du formulaire de contact.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées pour une durée maximale de 3 ans à compter de notre dernier contact, sauf obligation légale contraire.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Destinataires des données</h2>
            <p>
              Vos données sont uniquement accessibles aux personnes habilitées au sein de RAMELEC SAS. Elles peuvent être transmises à des prestataires techniques (hébergement, envoi d'emails) dans le strict cadre de l'exécution de leurs services, sous contrat garantissant leur confidentialité.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants concernant vos données :</p>
            <ul>
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit d'opposition :</strong> vous opposer à un traitement</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format lisible</li>
              <li><strong>Droit à la limitation :</strong> suspendre temporairement un traitement</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous par email à <a href="mailto:ramelec.ang@gmail.com">ramelec.ang@gmail.com</a>. Nous répondrons dans un délai d'un mois.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Réclamation auprès de la CNIL</h2>
            <p>
              Si vous estimez que le traitement de vos données ne respecte pas la réglementation, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies techniques indispensables à son bon fonctionnement. Ces cookies ne collectent aucune donnée personnelle et ne nécessitent pas de consentement préalable. Aucun cookie de traçage ou publicitaire n'est utilisé sur ce site.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Mise à jour</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière mise à jour est indiquée ci-dessous.
            </p>
            <p><strong>Dernière mise à jour :</strong> Mars 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}
