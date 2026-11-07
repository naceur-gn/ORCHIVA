import React from 'react';

export default function Hero({ t }) {
  return (
    <>
      {/* 1. Full-Width Video Showcase (Adjusted to window size, no overlays or rectangles) */}
      <section className="hero-video-section" id="hero-video">
        <video
          className="hero-video-player"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/assets/orchiva_pro_loop_1080p.webm" type="video/webm" />
        </video>
      </section>

      {/* 2. Institutional Presentation Section (Positioned UNDER the video) */}
      <section className="hero-section" id="hero">
        <div className="container hero-container">
          <div className="hero-content reveal">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot"></span>
              <span>{t.hero.eyebrow}</span>
            </div>

            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>

            <div className="hero-cta-group">
              <a href="#citrusflow" className="btn btn-primary btn-lg">{t.hero.ctaPrimary}</a>
              <a href="#pilot" className="btn btn-secondary btn-lg">{t.hero.ctaSecondary}</a>
            </div>
          </div>

          {/* Technical Reality Ribbon (Grounded in MVP specification) */}
          <div className="hero-metrics-grid reveal">
            <div className="metric-card">
              <div className="metric-value">100%</div>
              <div className="metric-label">{t.metrics.retrofit}</div>
              <div className="metric-desc">{t.metrics.retrofitDesc}</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">LoRaWAN</div>
              <div className="metric-label">{t.metrics.telemetry}</div>
              <div className="metric-desc">{t.metrics.telemetryDesc}</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">1 Zone</div>
              <div className="metric-label">{t.metrics.pilot}</div>
              <div className="metric-desc">{t.metrics.pilotDesc}</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{t.metrics.teamValue || "Tunisie"}</div>
              <div className="metric-label">{t.metrics.team}</div>
              <div className="metric-desc">{t.metrics.teamDesc}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
