import React, { Suspense } from 'react';
import { ArrowDown, Download, Sparkles, MapPin, Layers } from 'lucide-react';
import Scene3D from './Scene3D';

interface HeroProps {
  isReducedMotion?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isReducedMotion = false }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-obsidian bg-grid-pattern">
      {/* 3D Scene Layer in Background / Side */}
      <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto opacity-75 md:opacity-90 flex items-center justify-center md:justify-end md:pr-12 lg:pr-24 overflow-hidden">
        <div className="w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] md:w-[620px] md:h-[620px] lg:w-[720px] lg:h-[720px] max-w-none transform md:translate-x-12 translate-y-12 md:translate-y-0">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-white/10 animate-pulse" />
              </div>
            }
          >
            <Scene3D isReducedMotion={isReducedMotion} />
          </Suspense>
        </div>
      </div>

      {/* Subtle radial vignette gradient to ensure 100% text contrast */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent md:bg-gradient-to-r md:from-obsidian md:via-obsidian/85 md:to-transparent" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full flex-1 flex flex-col justify-center">
        {/* Top Technical Metadata Bar */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-8 text-xs font-mono text-metadata-light">
          <div className="flex items-center gap-2 border border-white/10 px-3 py-1 rounded bg-white/[0.02]">
            <MapPin className="w-3.5 h-3.5 text-acid-lime" />
            <span>NAGPUR, INDIA</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 border border-white/10 px-3 py-1 rounded bg-white/[0.02]">
            <Layers className="w-3.5 h-3.5 text-metadata-dim" />
            <span>B.TECH COMP. ENG &bull; 2027</span>
          </div>
          <div className="flex items-center gap-2 text-acid-lime/90 tracking-widest text-[11px]">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>SIH NATIONAL FINALIST</span>
          </div>
        </div>

        {/* Oversized Kinetic Headline */}
        <div className="space-y-1 sm:space-y-2 mb-8 max-w-4xl">
          <div className="overflow-hidden">
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-warm-white leading-[0.9] select-none">
              ENGINEER
            </h1>
          </div>
          <div className="overflow-hidden flex items-baseline gap-4 sm:gap-6">
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-warm-white leading-[0.9] select-none">
              THE
            </h1>
            <span className="font-mono text-xs sm:text-sm text-acid-lime tracking-widest uppercase py-1 px-2.5 border border-acid-lime/30 rounded-sm bg-acid-lime/10 hidden sm:inline-block">
              [SYSTEMS &bull; AI &bull; SPATIAL]
            </span>
          </div>
          <div className="overflow-hidden">
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-acid-lime via-white to-metadata-light leading-[0.9] select-none">
              UNEXPECTED.
            </h1>
          </div>
        </div>

        {/* Supporting Copy & Narrative */}
        <div className="max-w-2xl mb-10 space-y-4">
          <p className="text-lg sm:text-xl md:text-2xl font-light text-warm-white/95 leading-relaxed">
            I build <span className="text-acid-lime font-normal">intelligent systems</span>, full-stack applications, and <span className="text-warm-white font-normal underline decoration-acid-lime/40 decoration-1 underline-offset-4">immersive digital experiences</span>.
          </p>
          <p className="text-sm sm:text-base text-metadata-light leading-relaxed max-w-xl">
            Bridging engineering, AI and interactive design to turn ambitious ideas into working software. Prepared for high-velocity internship and engineering roles.
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <a
            href="#work"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-acid-lime text-obsidian font-mono text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-200 hover:bg-acid-lime-hover shadow-[0_0_30px_rgba(198,255,77,0.25)] hover:shadow-[0_0_40px_rgba(198,255,77,0.45)] hover:-translate-y-0.5"
          >
            <span>EXPLORE SELECTED WORK</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </a>

          <a
            href="/resume.pdf"
            download="Mudit_Katre_Resume.pdf"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 bg-white/[0.02] hover:bg-white/[0.06] text-warm-white font-mono text-sm font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 hover:border-acid-lime/50 hover:text-acid-lime hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>
      </div>

      {/* Bottom Technical Strip & Scroll Guide */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full mt-12 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-metadata-dim">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-acid-lime" />
          <span className="tracking-widest uppercase">MUDIT.EXE &bull; BUILD 2026.10</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <span>LAT 21.1458&deg; N &bull; LON 79.0882&deg; E</span>
          <span className="text-metadata-light">FULL-STACK / AI / CREATIVE ENGINEERING</span>
        </div>

        <a
          href="#work"
          className="flex items-center gap-2 text-metadata-light hover:text-acid-lime transition-colors group cursor-pointer"
          aria-label="Scroll to projects"
        >
          <span className="tracking-widest uppercase text-[11px]">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-acid-lime" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
