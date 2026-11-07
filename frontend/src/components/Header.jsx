import React, { useState, useEffect } from 'react';

export default function Header({ t, lang, setLang }) {
  const [headerMode, setHeaderMode] = useState('top'); // 'top' | 'transparent' | 'hidden'
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const videoSection = document.getElementById('hero-video');

      if (!videoSection) {
        setHeaderMode(scrollY > 20 ? 'transparent' : 'top');
        return;
      }

      const videoRect = videoSection.getBoundingClientRect();
      const headerHeight = 76; // header height in px

      if (scrollY < 20) {
        // At the top of the page
        setHeaderMode('top');
      } else if (videoRect.bottom > headerHeight) {
        // Scrolling over the video -> transparent with white logo & text
        setHeaderMode('transparent');
      } else {
        // Passed the video -> disappears slowly
        setHeaderMode('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = headerMode === 'transparent';
  const isHidden = headerMode === 'hidden';

  const logoSrc = isTransparent
    ? '/assets/direction-a-white-logo.svg'
    : '/assets/direction-a-corporate-logo.svg';

  const citrusflowIconSrc = isTransparent
    ? '/assets/direction-b-white.svg'
    : '/assets/direction-b-app-citrusflow.svg';

  return (
    <>
      <header 
        className={`site-header ${isTransparent ? 'header-transparent' : ''} ${isHidden ? 'header-hidden' : ''}`} 
        id="header"
      >
        <div className="container header-inner">
          {/* Corporate Master Logo: Direction A (Switches to white when transparent) */}
          <a href="#hero" className="brand-logo" aria-label="ORCHIVA Technologies">
            <img src={logoSrc} alt="ORCHIVA Technologies" className="logo-img" />
          </a>

          {/* Desktop Navigation */}
          <nav className="main-nav" aria-label="Navigation principale">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#citrusflow" className="nav-link nav-highlight">
                  <img src={citrusflowIconSrc} alt="CITRUSFLOW" className="nav-sub-icon" />
                  {t.nav.citrusflow}
                </a>
              </li>
              <li className="nav-item"><a href="#architecture" className="nav-link">{t.nav.architecture}</a></li>
              <li className="nav-item"><a href="#methodology" className="nav-link">{t.nav.methodology}</a></li>
              <li className="nav-item"><a href="#roadmap" className="nav-link">{t.nav.roadmap}</a></li>
              <li className="nav-item"><a href="#pilot" className="nav-link">{t.nav.pilot}</a></li>
              <li className="nav-item"><a href="#about" className="nav-link">{t.nav.about}</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link">{t.nav.contact}</a></li>
            </ul>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="header-actions">
            <a href="#contact" className="btn btn-primary">{t.nav.cta}</a>
            <button 
              className="mobile-toggle"
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <img src="/assets/direction-a-corporate-logo.svg" alt="ORCHIVA" className="drawer-logo" />
          <button className="drawer-close" onClick={() => setMobileOpen(false)}>&times;</button>
        </div>
        <ul className="drawer-nav">
          <li><a href="#citrusflow" className="drawer-link" onClick={() => setMobileOpen(false)}>CITRUSFLOW (Projet)</a></li>
          <li><a href="#architecture" className="drawer-link" onClick={() => setMobileOpen(false)}>{t.nav.architecture}</a></li>
          <li><a href="#methodology" className="drawer-link" onClick={() => setMobileOpen(false)}>{t.nav.methodology}</a></li>
          <li><a href="#roadmap" className="drawer-link" onClick={() => setMobileOpen(false)}>{t.nav.roadmap}</a></li>
          <li><a href="#pilot" className="drawer-link" onClick={() => setMobileOpen(false)}>{t.nav.pilot}</a></li>
          <li><a href="#about" className="drawer-link" onClick={() => setMobileOpen(false)}>{t.nav.about}</a></li>
          <li><a href="#contact" className="drawer-link" onClick={() => setMobileOpen(false)}>{t.nav.contact}</a></li>
        </ul>
        <div className="drawer-footer">
          <div className="lang-switcher">
            <button className={`lang-btn ${lang === 'fr' ? 'active' : ''}`} onClick={() => setLang('fr')}>Français</button>
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>English</button>
          </div>
          <a href="#contact" className="btn btn-primary btn-block" onClick={() => setMobileOpen(false)}>{t.nav.cta}</a>
        </div>
      </div>
    </>
  );
}
