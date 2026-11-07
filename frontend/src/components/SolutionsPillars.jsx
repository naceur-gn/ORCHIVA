import React from 'react';

export default function SolutionsPillars({ t }) {
  return (
    <section className="section solutions-section" id="modules">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">{t.product.tag}</div>
          <h2 className="section-title">{t.product.title}</h2>
          <p className="section-subtitle">{t.product.subtitle}</p>
        </div>

        {/* Highlight Banner: CITRUSFLOW (Product Mark Direction B) */}
        <div className="product-flagship-card reveal" id="citrusflow">
          <div className="p-flagship-header">
            <div className="p-brand-lockup">
              <img src="/assets/direction-b-app-citrusflow.svg" alt="CITRUSFLOW Logo Direction B" className="p-logo" />
              <div>
                <span className="p-tag">{t.product.badge}</span>
                <h3 className="p-title">CITRUSFLOW</h3>
                <span className="p-sub">Un produit développé par ORCHIVA Technologies</span>
              </div>
            </div>
            <div className="p-status-pill">Bassin Pilote Cible · Cap Bon (Nabeul)</div>
          </div>
          <p className="p-flagship-lead">
            Un système matériel et logiciel retrofit qui relie les conditions du sol, les débits d'eau, la pression de ligne et le fonctionnement des motopompes pour produire des alertes claires et des conseils agronomiques adaptés aux vergers d'agrumes.
          </p>
        </div>

        {/* 4 Core Modules of CITRUSFLOW MVP */}
        <div className="modules-grid reveal">
          <div className="module-card">
            <div className="module-num">01</div>
            <h3 className="module-title">{t.product.m1Title}</h3>
            <p className="module-desc">{t.product.m1Desc}</p>
            <div className="module-spec">2 profondeurs racinaires · Tensiométrie & humidité volumique</div>
          </div>

          <div className="module-card">
            <div className="module-num">02</div>
            <h3 className="module-title">{t.product.m2Title}</h3>
            <p className="module-desc">{t.product.m2Desc}</p>
            <div className="module-spec">Débitmètre certifié · Transducteur de pression en tête de zone</div>
          </div>

          <div className="module-card">
            <div className="module-num">03</div>
            <h3 className="module-title">{t.product.m3Title}</h3>
            <p className="module-desc">{t.product.m3Desc}</p>
            <div className="module-spec">Calcul du ratio kWh/m³ · Temps de marche réel de la pompe</div>
          </div>

          <div className="module-card">
            <div className="module-num">04</div>
            <h3 className="module-title">{t.product.m4Title}</h3>
            <p className="module-desc">{t.product.m4Desc}</p>
            <div className="module-spec">Validation agronomique locale · Équation FAO-56 transparente</div>
          </div>
        </div>
      </div>
    </section>
  );
}
