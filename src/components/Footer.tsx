import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in IST (UTC+5:30)
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setCurrentTime(istString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-obsidian-deep border-t border-white/[0.08] font-mono text-xs text-metadata-dim">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Monogram and Brand */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded border border-white/20 flex items-center justify-center text-acid-lime">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="font-display font-extrabold text-warm-white tracking-wider">
            MUDIT.EXE
          </span>
          <span className="text-white/20">&bull;</span>
          <span>&copy; {new Date().getFullYear()} MUDIT KATRE</span>
        </div>

        {/* Center: Live Telemetry */}
        <div className="flex items-center gap-4 text-[11px]">
          <div className="flex items-center gap-1.5 text-warm-white">
            <span className="w-2 h-2 rounded-full bg-acid-lime animate-pulse" />
            <span>NAGPUR, IN: {currentTime || '17:41:00'} IST</span>
          </div>
          <span className="hidden sm:inline text-white/20">&bull;</span>
          <span className="hidden sm:inline">REACT &bull; THREE.JS &bull; TAILWIND</span>
        </div>

        {/* Right: Back to Top Control */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-3 py-1.5 rounded border border-white/10 hover:border-acid-lime/50 text-metadata-light hover:text-acid-lime transition-all focus-visible:outline-acid-lime"
          aria-label="Scroll back to top"
        >
          <span className="text-[11px] uppercase tracking-wider">BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
