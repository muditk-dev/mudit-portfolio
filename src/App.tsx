import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) {
      setLoading(false);
      return;
    }

    // Fast, tasteful opening sequence (1.1 seconds max)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-obsidian text-warm-white selection:bg-acid-lime selection:text-obsidian overflow-x-hidden">
      {/* Precision Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Tasteful Opening Sequence Overlay */}
      {loading && (
        <div
          onClick={() => setLoading(false)}
          className="fixed inset-0 z-50 bg-obsidian flex flex-col items-center justify-center p-6 cursor-pointer font-mono text-xs select-none animate-out fade-out duration-300 fill-mode-forwards"
          aria-label="Loading Mudit Katre Portfolio"
        >
          <div className="flex flex-col items-center space-y-4 max-w-sm text-center">
            <div className="w-10 h-10 rounded border border-acid-lime/40 flex items-center justify-center text-acid-lime animate-pulse">
              <span className="font-display font-extrabold text-sm">M</span>
            </div>
            <div className="space-y-1">
              <div className="text-warm-white font-bold tracking-widest uppercase">
                MUDIT.EXE // SYSTEM INITIATING
              </div>
              <div className="text-[11px] text-metadata-dim">
                ENGINEER THE UNEXPECTED &bull; 2026.10
              </div>
            </div>
            {/* Progress bar line */}
            <div className="w-36 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-acid-lime animate-[pulse_1s_ease-in-out_infinite] w-full" />
            </div>
            <span className="text-[10px] text-metadata-dim pt-2">
              CLICK OR TAP ANYWHERE TO BYPASS
            </span>
          </div>
        </div>
      )}

      {/* Top Header Navigation */}
      <Navigation />

      {/* Main Sections */}
      <main id="main-content">
        <Hero isReducedMotion={isReducedMotion} />
        <ProjectShowcase />
        <AboutSection />
        <SkillsSection />
        <ExperienceTimeline />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
