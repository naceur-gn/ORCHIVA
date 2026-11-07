import React, { useState, useEffect } from 'react';
import { translations } from './i18n';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import SolutionsPillars from './components/SolutionsPillars';
import InteractiveTelemetry from './components/InteractiveTelemetry';
import Methodology from './components/Methodology';
import RoadmapSection from './components/RoadmapSection';
import PilotSection from './components/PilotSection';
import AboutSection from './components/AboutSection';
import PilotForm from './components/PilotForm';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [lang, setLang] = useState('fr');
  const t = translations[lang];

  // Scroll-triggered animations system
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [lang]);

  return (
    <div className="orchiva-app">
      {/* 1. Top Institutional Banner (Without deleted Pilot link) */}
      <TopBar lang={lang} setLang={setLang} t={t} />

      {/* 2. Primary Navigation Header */}
      <Header t={t} lang={lang} setLang={setLang} />

      <main>
        {/* 3. Hero Section with Real MVP Technical Targets */}
        <Hero t={t} />

        {/* 4. Flagship Product: CITRUSFLOW & 4 Integrated Modules */}
        <SolutionsPillars t={t} />

        {/* 5. CITRUSFLOW Monitor Prototype Telemetry (No fake data) */}
        <InteractiveTelemetry t={t} />

        {/* 6. Scientific Measurement Doctrine ("Mesuré, non deviné") */}
        <Methodology t={t} />

        {/* 7. Product Family Roadmap (Monitor -> Control -> Intelligence) */}
        <RoadmapSection t={t} />

        {/* 8. Cap Bon 1-Zone Pilot Evaluation Offer */}
        <PilotSection t={t} />

        {/* 9. About ORCHIVA Technologies & 4 Founding Engineers */}
        <AboutSection t={t} />

        {/* 10. Direct Pilot Contact & Evaluation Form */}
        <PilotForm t={t} />
      </main>

      {/* 11. Institutional Footer */}
      <Footer t={t} />
    </div>
  );
}
