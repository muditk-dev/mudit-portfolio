import React from 'react';
import { Terminal, Code2, Brain, Box, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-obsidian border-t border-white/[0.08] overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-acid-lime tracking-widest uppercase mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>INDEX: 02 // PHILOSOPHY & PROFILE</span>
        </div>

        {/* Split Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Oversized Typography & Core Thesis */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-warm-white leading-[0.95]">
              LOGIC <br />
              MEETS <br />
              <span className="text-acid-lime">IMAGINATION.</span>
            </h2>

            <div className="p-4 bg-white/[0.02] border border-white/10 rounded font-mono text-xs text-metadata-light space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-metadata-dim">AFFILIATION:</span>
                <span className="text-warm-white">Bajaj Institute of Technology</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-metadata-dim">SPECIALIZATION:</span>
                <span className="text-warm-white">B.Tech Computer Engineering</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-metadata-dim">EXPECTED GRADUATION:</span>
                <span className="text-acid-lime font-bold">2027</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-metadata-dim">BASE OF OPERATIONS:</span>
                <span className="text-warm-white">Nagpur, Maharashtra, India</span>
              </div>
            </div>

            <p className="font-mono text-xs text-metadata-dim leading-relaxed">
              &gt; Positioning at the intersection of full-stack engineering, computational data models, and interactive WebGL spatial web technologies.
            </p>
          </div>

          {/* Right Column: Editorial Paragraphs & Engineering Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-warm-white/90 leading-relaxed font-light">
              <p>
                I am a final-year Computer Engineering undergraduate with hands-on experience designing end-to-end web architectures—from responsive React and Three.js frontends to asynchronous FastAPI, Python microservices, and PostgreSQL backends.
              </p>
              <p>
                My focus centers on <strong className="text-acid-lime font-semibold">practical problem solving</strong>: whether that means building machine learning pipelines to correct monsoon rainfall biases for SIH 2026, structuring statutory approval workflows for the AICTE Regulation Bureau, or creating real-time 3D spatial floor planners.
              </p>
              <p className="text-sm sm:text-base text-metadata-light">
                Beyond writing clean code, I actively lead engineering teams. Having captained teams across SIH 2024, 2025, and 2026—culminating in a National Grand Finale finish in 2024—and serving as Secretary of the StartBIT entrepreneurship forum, I bring structured communication, agile discipline, and presentation rigor to every technical challenge.
              </p>
            </div>

            {/* Engineering Pillars Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
              <div className="p-4 rounded border border-white/10 bg-white/[0.02] hover:border-acid-lime/40 transition-colors">
                <div className="flex items-center gap-2.5 text-warm-white font-display font-bold text-base mb-2">
                  <Code2 className="w-4 h-4 text-acid-lime" />
                  <span>Full-Stack Development</span>
                </div>
                <p className="text-xs text-metadata-light leading-relaxed">
                  Building robust, type-safe interfaces in React and TypeScript linked with FastAPI, RESTful services, and structured SQL database models.
                </p>
              </div>

              <div className="p-4 rounded border border-white/10 bg-white/[0.02] hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center gap-2.5 text-warm-white font-display font-bold text-base mb-2">
                  <Brain className="w-4 h-4 text-cyan-400" />
                  <span>AI & Data-Driven Systems</span>
                </div>
                <p className="text-xs text-metadata-light leading-relaxed">
                  Data analysis with Pandas and NumPy, exploratory analysis, SHAP interpretability, and ML modeling with PyTorch and XGBoost.
                </p>
              </div>

              <div className="p-4 rounded border border-white/10 bg-white/[0.02] hover:border-amber-400/40 transition-colors">
                <div className="flex items-center gap-2.5 text-warm-white font-display font-bold text-base mb-2">
                  <Box className="w-4 h-4 text-amber-400" />
                  <span>Spatial 3D Experiences</span>
                </div>
                <p className="text-xs text-metadata-light leading-relaxed">
                  Real-time WebGL and Three.js / React Three Fiber rendering to bridge interactive design, procedural graphics, and spatial applications.
                </p>
              </div>

              <div className="p-4 rounded border border-white/10 bg-white/[0.02] hover:border-rose-400/40 transition-colors">
                <div className="flex items-center gap-2.5 text-warm-white font-display font-bold text-base mb-2">
                  <Award className="w-4 h-4 text-rose-400" />
                  <span>Hackathon Leadership</span>
                </div>
                <p className="text-xs text-metadata-light leading-relaxed">
                  3x SIH team captain, L&T TECHgium lead, and StartBIT secretary with verified experience steering technical dossiers and jury pitches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
