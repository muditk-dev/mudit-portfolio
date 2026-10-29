import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, Download, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'muditkatre.mk@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/mudit-katre-a37685428';
  const githubUrl = 'https://github.com/muditk-dev';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.85 },
        colors: ['#C6FF4D', '#ffffff', '#38BDF8'],
      });
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-obsidian border-t border-white/[0.08] overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-acid-lime/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-acid-lime tracking-widest uppercase mb-6">
          <Terminal className="w-3.5 h-3.5" />
          <span>INDEX: 05 // TRANSMISSION & CONTACT</span>
        </div>

        {/* Oversized Headline */}
        <div className="mb-10 max-w-4xl">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter text-warm-white leading-[0.9] select-none">
            LET'S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-lime via-white to-metadata-light">
              SOMETHING REAL.
            </span>
          </h2>
        </div>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl md:text-2xl font-light text-metadata-light leading-relaxed max-w-2xl mb-12">
          Have an opportunity, an interesting problem, or a team building something ambitious? Let's connect.
        </p>

        {/* Transmission Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Direct Email Module */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded border border-white/10 bg-white/[0.02] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-metadata-dim mb-3">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-acid-lime animate-pulse" />
                  PRIMARY COMMUNICATION CHANNEL
                </span>
                <span>NAGPUR (UTC+5:30)</span>
              </div>

              <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-warm-white break-all">
                {email}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-acid-lime text-obsidian font-mono text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-acid-lime-hover transition-all duration-200 shadow-[0_0_20px_rgba(198,255,77,0.25)]"
              >
                <Mail className="w-4 h-4" />
                <span>OPEN EMAIL CLIENT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 bg-white/[0.02] hover:bg-white/[0.06] text-warm-white font-mono text-xs uppercase tracking-wider rounded-sm transition-colors"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-acid-lime" />
                    <span className="text-acid-lime font-bold">COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY ADDRESS</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Professional Channels Module */}
          <div className="lg:col-span-5 space-y-4">
            {/* LinkedIn Card */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded border border-white/10 bg-white/[0.015] hover:border-cyan-400/40 hover:bg-white/[0.03] transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded border border-white/10 bg-white/[0.02] flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/40 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-warm-white group-hover:text-cyan-400 transition-colors">
                    LinkedIn Profile
                  </div>
                  <div className="font-mono text-xs text-metadata-dim">
                    /in/mudit-katre-a37685428
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-metadata-dim group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* GitHub Card */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded border border-white/10 bg-white/[0.015] hover:border-acid-lime/40 hover:bg-white/[0.03] transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded border border-white/10 bg-white/[0.02] flex items-center justify-center text-warm-white group-hover:text-acid-lime group-hover:border-acid-lime/40 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-warm-white group-hover:text-acid-lime transition-colors">
                    GitHub Profile
                  </div>
                  <div className="font-mono text-xs text-metadata-dim">
                    @muditk-dev
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-metadata-dim group-hover:text-acid-lime transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Resume Download Card */}
            <a
              href="/resume.pdf"
              download="Mudit_Katre_Resume.pdf"
              className="group p-5 rounded border border-acid-lime/30 bg-acid-lime/[0.03] hover:border-acid-lime hover:bg-acid-lime/[0.08] transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded border border-acid-lime/30 bg-acid-lime/10 flex items-center justify-center text-acid-lime">
                  <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                </div>
                <div>
                  <div className="font-display font-bold text-warm-white group-hover:text-acid-lime transition-colors">
                    Verified Resume (PDF)
                  </div>
                  <div className="font-mono text-xs text-metadata-dim">
                    Latest Updated &bull; Direct Download
                  </div>
                </div>
              </div>
              <Download className="w-4 h-4 text-acid-lime" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
