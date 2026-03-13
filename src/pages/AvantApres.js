import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { AVANT_APRES_PROJECTS, CATEGORIES } from "../data/projects";
import "./AvantApres.css";

function Lightbox({ project, side, onClose }) {
  const photos = side === "avant" ? project.avant : project.apres;
  const [idx, setIdx] = useState(0);

  const nav = useCallback((dir) => {
    setIdx(i => Math.max(0, Math.min(photos.length - 1, i + dir)));
  }, [photos.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") nav(-1);
      if (e.key === "ArrowRight") nav(1);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [nav, onClose]);

  const photo = photos[idx];

  return (
    <div className="lb-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="lb-box">
        <div className="lb-header">
          <div>
            <span className={`lb-badge lb-badge--${side}`}>{side === "avant" ? "AVANT" : "APRÈS"}</span>
            <div className="lb-title">{project.title}</div>
            <div className="lb-meta">📍 {project.loc} · {project.cat}</div>
          </div>
          <button className="lb-close" onClick={onClose}>✕</button>
        </div>

        <div className="lb-stage">
          {photo.url ? (
            <img src={photo.url} alt={photo.label} className="lb-img" />
          ) : (
            <div className="lb-placeholder" style={{ background: side === "avant" ? project.bcolor : project.acolor }}>
              <span className="lb-ph-icon">{photo.icon}</span>
              <span className="lb-ph-label">{photo.label}</span>
              <span className="lb-ph-hint">Ajoutez votre photo ici — remplacez url: null par l'URL de votre image</span>
            </div>
          )}

          <button className="lb-arrow lb-arrow--prev" onClick={() => nav(-1)} disabled={idx === 0}>‹</button>
          <button className="lb-arrow lb-arrow--next" onClick={() => nav(1)} disabled={idx === photos.length - 1}>›</button>
        </div>

        <div className="lb-footer">
          <div className="lb-caption">{photo.label}</div>
          <div className="lb-dots">
            {photos.map((_, i) => (
              <button
                key={i}
                className={`lb-dot${i === idx ? " lb-dot--on" : ""}`}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
          <div className="lb-counter">{idx + 1} / {photos.length}</div>
        </div>
      </div>
    </div>
  );
}

export default function AvantApres() {
  const [filter, setFilter] = useState("Tous");
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === "Tous"
    ? AVANT_APRES_PROJECTS
    : AVANT_APRES_PROJECTS.filter(p => p.cat === filter);

  const openLB = (project, side) => setLightbox({ project, side });
  const closeLB = useCallback(() => setLightbox(null), []);

  return (
    <>
      {lightbox && <Lightbox project={lightbox.project} side={lightbox.side} onClose={closeLB} />}

      <section className="aa-hero">
        <div className="container">
          <span className="aa-label">La preuve par l'image</span>
          <h1 className="aa-title">Avant / Après — Nos Réalisations</h1>
          <p className="aa-sub">
            Cliquez sur <strong>AVANT</strong> ou <strong>APRÈS</strong> pour voir toutes les photos du chantier.
            Photos authentiques de nos travaux en Île-de-France — pas de stock photos.
          </p>
        </div>
      </section>

      {/* Filters bar — clearly separated from dark hero */}
      <div className="aa-filters-bar">
        <div className="container">
          <div className="aa-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`aa-filter${filter === cat ? " aa-filter--on" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="aa-sec">
        <div className="container">
          {filtered.length === 0 && (
            <div className="aa-empty">Aucun projet dans cette catégorie pour le moment.</div>
          )}

          <div className="aa-grid">
            {filtered.map(proj => (
              <div key={proj.id} className="aa-card">
                <div className="aa-card-header">
                  <div className="aa-cat">{proj.cat}</div>
                  <div className="aa-card-title">{proj.title}</div>
                  <div className="aa-card-loc">📍 {proj.loc}</div>
                  <div className="aa-card-desc">{proj.desc}</div>
                </div>

                <div className="aa-panels">
                  <div
                    className="aa-panel aa-panel--avant"
                    style={{ background: proj.bcolor }}
                    onClick={() => openLB(proj, "avant")}
                    title="Cliquez pour voir toutes les photos AVANT"
                  >
                    <div className="aa-panel-thumb">
                      {proj.avant[0].url
                        ? <img src={proj.avant[0].url} alt="avant" />
                        : <span className="aa-panel-icon">{proj.avant[0].icon}</span>
                      }
                    </div>
                    <span className="aa-badge aa-badge--avant">AVANT</span>
                    <span className="aa-count">{proj.avant.length} photo{proj.avant.length > 1 ? "s" : ""}</span>
                    <div className="aa-hover-hint">Voir les {proj.avant.length} photos →</div>
                  </div>

                  <div className="aa-divider">
                    <div className="aa-arrow-icon">→</div>
                  </div>

                  <div
                    className="aa-panel aa-panel--apres"
                    style={{ background: proj.acolor }}
                    onClick={() => openLB(proj, "apres")}
                    title="Cliquez pour voir toutes les photos APRÈS"
                  >
                    <div className="aa-panel-thumb">
                      {proj.apres[0].url
                        ? <img src={proj.apres[0].url} alt="après" />
                        : <span className="aa-panel-icon">{proj.apres[0].icon}</span>
                      }
                    </div>
                    <span className="aa-badge aa-badge--apres">APRÈS</span>
                    <span className="aa-count">{proj.apres.length} photo{proj.apres.length > 1 ? "s" : ""}</span>
                    <div className="aa-hover-hint">Voir les {proj.apres.length} photos →</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aa-cta">
        <div className="container">
          <h2 className="aa-cta-title">Votre projet sera notre prochain avant/après.</h2>
          <p className="aa-cta-sub">Contactez-nous pour un devis gratuit et sans engagement.</p>
          <Link to="/contact" className="btn btn--amber">Demander un devis →</Link>
        </div>
      </section>
    </>
  );
}
