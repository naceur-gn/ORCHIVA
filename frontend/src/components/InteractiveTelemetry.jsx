import React, { useState } from 'react';

export default function InteractiveTelemetry({ t }) {
  const [activeTab, setActiveTab] = useState('hydraulics');

  return (
    <section className="section demo-section" id="architecture">
      <div className="container">
        <div className="demo-box reveal">
          <div className="demo-header">
            <div>
              <span className="demo-badge">{t.demo.badge}</span>
              <h2 className="demo-title">{t.demo.title}</h2>
              <p className="demo-disclaimer">{t.demo.disclaimer}</p>
            </div>

            {/* Architecture Tabs */}
            <div className="demo-tabs">
              <button 
                className={`demo-tab ${activeTab === 'hydraulics' ? 'active' : ''}`}
                onClick={() => setActiveTab('hydraulics')}
              >
                <img src="/assets/direction-b-app-citrusflow.svg" alt="Hydraulics" />
                {t.demo.tabHydraulics}
              </button>
              <button 
                className={`demo-tab ${activeTab === 'soil' ? 'active' : ''}`}
                onClick={() => setActiveTab('soil')}
              >
                {t.demo.tabSoil}
              </button>
              <button 
                className={`demo-tab ${activeTab === 'hardware' ? 'active' : ''}`}
                onClick={() => setActiveTab('hardware')}
              >
                {t.demo.tabHardware}
              </button>
            </div>
          </div>

          {/* TAB 1: Hydraulics */}
          {activeTab === 'hydraulics' && (
            <div className="tab-pane active">
              <div className="dashboard-preview">
                <div className="dash-meta">
                  <div className="meta-item">
                    <span className="meta-label">Module Conçu : </span>
                    <strong className="meta-value">CITRUSFLOW Hydraulic Node (Entrée de secteur)</strong>
                  </div>
                  <div className="meta-item">
                    <span className="status-pill status-info">Spécification Prototype</span>
                  </div>
                </div>

                <div className="telemetry-cards">
                  <div className="t-card">
                    <div className="t-label">Débit Instantané (m³/h)</div>
                    <div className="t-val">Débitmètre <span className="t-unit">à impulsions</span></div>
                    <div className="t-sub">Vérifie si la quantité d'eau délivrée correspond au débit théorique des goutteurs.</div>
                  </div>
                  <div className="t-card">
                    <div className="t-label">Pression de Ligne (bar)</div>
                    <div className="t-val">Transducteur <span className="t-unit">4-20 mA</span></div>
                    <div className="t-sub">Détecte les chutes de pression (fuite/rupture) ou les surpressions (colmatage/filtre bouché).</div>
                  </div>
                  <div className="t-card">
                    <div className="t-label">Volume Cumulé (m³)</div>
                    <div className="t-val">Comptage <span className="t-unit">par secteur</span></div>
                    <div className="t-sub">Comptabilise le volume d'eau réel délivré pour chaque tour d'eau.</div>
                  </div>
                  <div className="t-card">
                    <div className="t-label">Indicateur d'Énergie (kWh/m³)</div>
                    <div className="t-val">Rapport <span className="t-unit">Eau / Énergie</span></div>
                    <div className="t-sub">Relie la consommation électrique de la motopompe au volume d'eau effectivement extrait.</div>
                  </div>
                </div>

                <div className="chart-mockup">
                  <div className="chart-header">
                    <span>Principe du Suivi de Débit (Courbe type d'un arrosage maîtrisé)</span>
                    <span className="mono-badge">Détection des anomalies de débit</span>
                  </div>
                  <div className="chart-bars">
                    <div className="bar-col" style={{ '--h': '70%' }}>
                      <span className="bar-tip">Phase montée</span>
                      <span className="bar-time">Début cycle</span>
                    </div>
                    <div className="bar-col" style={{ '--h': '85%' }}>
                      <span className="bar-tip">Plage nominale</span>
                      <span className="bar-time">Régime stable</span>
                    </div>
                    <div className="bar-col" style={{ '--h': '85%' }}>
                      <span className="bar-tip">Pression conforme</span>
                      <span className="bar-time">Milieu d'arrosage</span>
                    </div>
                    <div className="bar-col" style={{ '--h': '84%' }}>
                      <span className="bar-tip">Volume contrôlé</span>
                      <span className="bar-time">Fin d'apport</span>
                    </div>
                    <div className="bar-col" style={{ '--h': '30%' }}>
                      <span className="bar-tip">Arrêt pompe</span>
                      <span className="bar-time">Clôture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Soil Root-Zone */}
          {activeTab === 'soil' && (
            <div className="tab-pane active">
              <div className="dashboard-preview">
                <div className="dash-meta">
                  <div className="meta-item">
                    <span className="meta-label">Module Conçu : </span>
                    <strong className="meta-value">Station Sol Racinaire (Sous goutteur représentatif)</strong>
                  </div>
                  <div className="meta-item">
                    <span className="status-pill status-info">Sondes à 2 Profondeurs</span>
                  </div>
                </div>

                <div className="root-zone-visualizer">
                  <div className="root-layer" style={{ borderLeftColor: '#5DB58A' }}>
                    <div className="layer-depth">Sonde 1 : Profondeur 20 cm</div>
                    <div className="layer-bar-wrapper">
                      <div className="layer-bar" style={{ width: '70%', background: '#5DB58A' }}></div>
                    </div>
                    <div className="layer-metrics">
                      <strong>Zone Superficielle</strong>
                      <span>Détecte immédiatement le front d'humectation au lancement de l'irrigation.</span>
                    </div>
                  </div>

                  <div className="root-layer" style={{ borderLeftColor: '#1F7A57' }}>
                    <div className="layer-depth">Sonde 2 : Profondeur 40 cm</div>
                    <div className="layer-bar-wrapper">
                      <div className="layer-bar" style={{ width: '55%', background: '#1F7A57' }}></div>
                    </div>
                    <div className="layer-metrics">
                      <strong>Cœur Racinaire Actif</strong>
                      <span>Zone où l'agrume absorbe la majorité de son eau. Vérifie si l'arrosage a bien pénétré.</span>
                    </div>
                  </div>
                </div>

                <div className="agronomic-note">
                  <strong>Objectif de la Mesure du Sol : </strong>
                  L'objectif n'est pas de deviner l'humidité avec une IA abstraite, mais de vérifier physiquement que l'eau atteint 40 cm sans traverser inutilement vers 60 cm (ce qui lessiverait les engrais azotés et gaspillerait l'énergie de pompage).
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Hardware & LoRaWAN */}
          {activeTab === 'hardware' && (
            <div className="tab-pane active">
              <div className="dashboard-preview">
                <div className="dash-meta">
                  <div className="meta-item">
                    <span className="meta-label">Composants Matériels : </span>
                    <strong className="meta-value">Cartes Électroniques & Passerelle conçues pour l'extérieur</strong>
                  </div>
                  <div className="meta-item">
                    <span className="status-pill status-info">Spécifications Matérielles</span>
                  </div>
                </div>

                <div className="hardware-specs-box">
                  <div className="spec-row">
                    <span className="spec-name">Microcontrôleur Embarqué :</span>
                    <span className="spec-val">STM32 Ultra-Low Power gérant des cycles de veille prolongée pour préserver la batterie</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-name">Liaison Radio :</span>
                    <span className="spec-val">LoRaWAN 868 MHz permettant de communiquer sur plusieurs kilomètres à travers les vergers d'agrumes</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-name">Mémoire Tampon Locale :</span>
                    <span className="spec-val">Sauvegarde automatique des mesures en mémoire flash interne en cas de perte de connexion 4G de la passerelle</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-name">Protection Électrique :</span>
                    <span className="spec-val">Diodes TVS contre les surtensions, isolation galvanique et protection contre l'inversion de polarité</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-name">Boîtier :</span>
                    <span className="spec-val">Boîtier étanche IP67 résistant aux UV et aux environnements agricoles méditerranéens</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Evidence-First Footer */}
          <div className="demo-footer-note">
            <span>Engagement de transparence : </span>
            Nous sommes en phase de prototypage. Ces spécifications décrivent exactement la chaîne de mesure physique que nous assemblons et testerons avec nos premiers vergers pilotes.
          </div>
        </div>
      </div>
    </section>
  );
}
