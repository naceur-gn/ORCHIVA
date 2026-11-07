import React from 'react';

export default function TopBar({ lang, setLang, t }) {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <span className="badge-institutional">{t.topbar.badge}</span>
          <span className="top-bar-text">{t.topbar.tagline}</span>
        </div>
        <div className="top-bar-right">
          <div className="lang-switcher">
            <button 
              className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
              onClick={() => setLang('fr')}
              aria-label="Français"
            >
              FR
            </button>
            <span className="lang-sep">|</span>
            <button 
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
