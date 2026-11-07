import React from 'react';

export default function Footer({ t }) {
  return (
    <footer className="site-footer" id="footer">
      <div className="container footer-container">
        
        <div className="footer-top">
          <div className="footer-brand-col">
            {/* Reversed Dark Corporate Logo (Direction A) */}
            <img src="/assets/direction-a-reversed-dark.svg" alt="ORCHIVA Technologies" className="footer-logo" />
            <p className="footer-brand-desc">{t.footer.desc}</p>
            <div className="footer-citrusflow-badge">
              <img src="/assets/direction-b-app-citrusflow.svg" alt="CITRUSFLOW Logo Direction B" className="f-product-icon" />
              <span>{t.footer.badge}</span>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Produit CITRUSFLOW</h4>
            <ul className="footer-links">
              <li><a href="#citrusflow">Présentation & Modules</a></li>
              <li><a href="#architecture">Architecture de Mesure</a></li>
              <li><a href="#roadmap">Feuille de Route Produit</a></li>
              <li><a href="#pilot">Kit Pilote Cap Bon</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">L'Entreprise</h4>
            <ul className="footer-links">
              <li><a href="#about">L'Équipe des Fondateurs</a></li>
              <li><a href="#methodology">Doctrine de la Preuve</a></li>
              <li><a href="#contact">Contact Institutionnel</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Éthique & Rigueur</h4>
            <ul className="footer-links">
              <li><a href="#methodology">Transparence des Données</a></li>
              <li><a href="#methodology">Propriété Exclusive du Planteur</a></li>
              <li><a href="#architecture">Fréquences Radio Autorisées (868 MHz)</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 ORCHIVA Technologies. Tous droits réservés. Mesuré, non deviné.
          </div>
          <div className="footer-disclaimer">
            Les outils développés par ORCHIVA Technologies visent l'aide à la décision par la mesure physique directe et ne formulent aucune promesse forfaitaire non étalonnée sur le terrain.
          </div>
        </div>

      </div>
    </footer>
  );
}
