import React from 'react';

export default function PilotSection({ t }) {
  return (
    <section className="section pilot-section" id="pilot">
      <div className="container">
        <div className="pilot-card reveal">
          <div className="pilot-content">
            <div className="section-tag tag-light">{t.pilot.tag}</div>
            <h2 className="pilot-title">{t.pilot.title}</h2>
            <p className="pilot-desc">{t.pilot.desc}</p>

            <div className="pilot-deliverables-grid">
              <div className="deliv-item">
                <span className="deliv-icon">01</span>
                <div>
                  <strong>{t.pilot.d1Title}</strong>
                  <p>{t.pilot.d1Desc}</p>
                </div>
              </div>
              <div className="deliv-item">
                <span className="deliv-icon">02</span>
                <div>
                  <strong>{t.pilot.d2Title}</strong>
                  <p>{t.pilot.d2Desc}</p>
                </div>
              </div>
              <div className="deliv-item">
                <span className="deliv-icon">03</span>
                <div>
                  <strong>{t.pilot.d3Title}</strong>
                  <p>{t.pilot.d3Desc}</p>
                </div>
              </div>
              <div className="deliv-item">
                <span className="deliv-icon">04</span>
                <div>
                  <strong>{t.pilot.d4Title}</strong>
                  <p>{t.pilot.d4Desc}</p>
                </div>
              </div>
            </div>

            <div className="pilot-footer">
              <div className="pilot-availability">
                <span className="pulse-indicator"></span>
                <span><strong>Zone de recherche : </strong> Cap Bon (Nabeul, Beni Khaled, Menzel Bouzelfa, Grombalia, Soliman)</span>
              </div>
              <a href="#contact" className="btn btn-citrus btn-lg">{t.pilot.cta}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
