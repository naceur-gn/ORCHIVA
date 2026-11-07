import React from 'react';

export default function Methodology({ t }) {
  return (
    <section className="section methodology-section" id="methodology">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">{t.methodology.tag}</div>
          <h2 className="section-title">{t.methodology.title}</h2>
          <p className="section-subtitle">{t.methodology.subtitle}</p>
        </div>

        <div className="methodology-steps reveal">
          <div className="m-step">
            <div className="m-step-num">01</div>
            <h3 className="m-step-title">{t.methodology.step1Title}</h3>
            <p className="m-step-desc">{t.methodology.step1Desc}</p>
          </div>
          <div className="m-step">
            <div className="m-step-num">02</div>
            <h3 className="m-step-title">{t.methodology.step2Title}</h3>
            <p className="m-step-desc">{t.methodology.step2Desc}</p>
          </div>
          <div className="m-step">
            <div className="m-step-num">03</div>
            <h3 className="m-step-title">{t.methodology.step3Title}</h3>
            <p className="m-step-desc">{t.methodology.step3Desc}</p>
          </div>
          <div className="m-step">
            <div className="m-step-num">04</div>
            <h3 className="m-step-title">{t.methodology.step4Title}</h3>
            <p className="m-step-desc">{t.methodology.step4Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
