import React from 'react';

export default function RoadmapSection({ t }) {
  return (
    <section className="section roadmap-section" id="roadmap">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">{t.roadmap.tag}</div>
          <h2 className="section-title">{t.roadmap.title}</h2>
          <p className="section-subtitle">{t.roadmap.subtitle}</p>
        </div>

        <div className="roadmap-grid reveal">
          <div className="roadmap-card active-card">
            <div className="roadmap-badge-current">{t.roadmap.p1Status}</div>
            <h3 className="roadmap-phase-title">{t.roadmap.p1Name}</h3>
            <p className="roadmap-phase-desc">{t.roadmap.p1Desc}</p>
            <div className="roadmap-check-list">
              <div>✓ Raccordement 100% retrofit</div>
              <div>✓ 2 stations de sol (2 profondeurs)</div>
              <div>✓ Débitmètre & pression en tête</div>
              <div>✓ Tableau de bord & alertes anomalies</div>
            </div>
          </div>

          <div className="roadmap-card planned-card">
            <div className="roadmap-badge-planned">{t.roadmap.p2Status}</div>
            <h3 className="roadmap-phase-title">{t.roadmap.p2Name}</h3>
            <p className="roadmap-phase-desc">{t.roadmap.p2Desc}</p>
            <div className="roadmap-check-list">
              <div>• Pilotage vannes asservi à la mesure</div>
              <div>• Sécurité locale et commande manuelle</div>
              <div>• Relais de puissance protégés</div>
              <div>• Déploiement après validation pilote</div>
            </div>
          </div>

          <div className="roadmap-card planned-card">
            <div className="roadmap-badge-planned">{t.roadmap.p3Status}</div>
            <h3 className="roadmap-phase-title">{t.roadmap.p3Name}</h3>
            <p className="roadmap-phase-desc">{t.roadmap.p3Desc}</p>
            <div className="roadmap-check-list">
              <div>• Modèles d'évapotranspiration affinés</div>
              <div>• Détection prédictive des anomalies</div>
              <div>• Entraîné sur données locales réelles</div>
              <div>• Prévu après plusieurs saisons de données</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

