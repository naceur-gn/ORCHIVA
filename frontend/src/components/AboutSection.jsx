import React from 'react';

export default function AboutSection({ t }) {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">{t.about.tag}</div>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        <div className="values-grid reveal">
          <div className="value-card">
            <h3 className="value-title">{t.about.v1Title}</h3>
            <p className="value-desc">{t.about.v1Desc}</p>
          </div>
          <div className="value-card">
            <h3 className="value-title">{t.about.v2Title}</h3>
            <p className="value-desc">{t.about.v2Desc}</p>
          </div>
          <div className="value-card">
            <h3 className="value-title">{t.about.v3Title}</h3>
            <p className="value-desc">{t.about.v3Desc}</p>
          </div>
          <div className="value-card">
            <h3 className="value-title">{t.about.v4Title}</h3>
            <p className="value-desc">{t.about.v4Desc}</p>
          </div>
        </div>

        {/* 4 Founding Engineers Structure */}
        <div className="team-banner reveal">
          <div className="team-banner-header">
            <h3>Une Équipe Fondatrice Complémentaire</h3>
            <p>Quatre ingénieurs tunisiens unis pour maîtriser l'ensemble de la chaîne de valeur</p>
          </div>
          <div className="team-roles-grid">
            <div className="team-role-card">
              <span className="role-badge">HARDWARE LEAD</span>
              <h4>Électronique & Capteurs</h4>
              <p>Conception schématique, routage PCB, boîtiers étanches et protection électrique contre les surtensions.</p>
            </div>
            <div className="team-role-card">
              <span className="role-badge">EMBEDDED LEAD</span>
              <h4>Micrologiciel & LoRaWAN</h4>
              <p>Firmware basse consommation temps réel, protocoles radio, chiffrement et synchronisation locale.</p>
            </div>
            <div className="team-role-card">
              <span className="role-badge">BACKEND LEAD</span>
              <h4>Données & Plateforme Cloud</h4>
              <p>Ingestion MQTT/HTTPS, base temporelle, intégrité des données brutes et sécurité de l'infrastructure.</p>
            </div>
            <div className="team-role-card">
              <span className="role-badge">PRODUCT LEAD</span>
              <h4>Application & Agronomie</h4>
              <p>Tableau de bord verger, alertes opérationnelles, bilan FAO-56 et relation directe avec les exploitants.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
