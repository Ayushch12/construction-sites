import React from "react";
import "./ServiceCard.css";

export default function ServiceCard({ icon, title, description, features, highlighted = false }) {
  return (
    <div className={`service-card${highlighted ? " service-card--highlighted" : ""}`}>
      <div className="service-card__icon">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
      {features && (
        <ul className="service-card__features">
          {features.map((f, i) => (
            <li key={i}>
              <span className="service-card__check">✓</span>
              {f}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
