import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Terminal, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onOpenResume?: () => void;
}

export const Navigation: React.FC<NavigationProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'STACK', href: '#stack' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-obsidian/85 backdrop-blur-md border-b border-white/[0.08]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#"
            className="group flex items-center gap-3 text-warm-white focus-visible:outline-acid-lime"
            aria-label="MUDIT.EXE Home"
          >
            <div className="w-8 h-8 rounded border border-white/20 bg-white/[0.03] group-hover:border-acid-lime/60 flex items-center justify-center transition-colors">
              <Terminal className="w-4 h-4 text-acid-lime" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-tight text-lg text-warm-white group-hover:text-acid-lime transition-colors">
                MUDIT<span className="text-acid-lime">.EXE</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-metadata-dim hidden sm:inline-block">
                FULL-STACK &bull; AI &bull; CREATIVE
              </span>
            </div>
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-xs uppercase tracking-widest text-metadata-light hover:text-acid-lime transition-colors duration-150 relative py-1 focus-visible:text-acid-lime"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Availability & Resume */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-2 text-[11px] font-mono text-metadata-light border border-white/10 px-3 py-1.5 rounded-full bg-white/[0.02]">
              <span className="w-2 h-2 rounded-full bg-acid-lime animate-pulse" />
              <span>NAGPUR, IN &bull; OPEN TO ROLES</span>
            </div>

            <a
              href="/resume.pdf"
              download="Mudit_Katre_Resume.pdf"
              className="group flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider px-4 py-2 bg-acid-lime text-obsidian rounded-sm hover:bg-acid-lime-hover transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(198,255,77,0.35)]"
            >
              <Download className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              <span>RESUME</span>
            </a>
          </div>

          {/* Mobile Menu Toggle & Direct Resume */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="/resume.pdf"
              download="Mudit_Katre_Resume.pdf"
              className="p-2 border border-acid-lime/40 bg-acid-lime/10 text-acid-lime rounded-sm text-xs font-mono flex items-center gap-1.5"
              aria-label="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">CV</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-warm-white border border-white/10 rounded hover:border-acid-lime/40 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-acid-lime" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-obsidian/95 backdrop-blur-xl md:hidden pt-28 px-8 flex flex-col justify-between pb-12 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-6">
            <div className="text-xs font-mono text-metadata-dim tracking-widest uppercase mb-2">
              Navigation Index
            </div>
            {navLinks.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline justify-between py-2 border-b border-white/[0.06] text-xl font-display font-bold text-warm-white hover:text-acid-lime transition-colors"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-metadata-dim">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-6">
            <div className="font-mono text-xs text-metadata-dim">
              Nagpur, India &bull; Expected Graduation 2027
            </div>
            <a
              href="/resume.pdf"
              download="Mudit_Katre_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider py-3.5 bg-acid-lime text-obsidian rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
            <a
              href="mailto:muditkatre.mk@gmail.com"
              className="w-full flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider py-3 border border-white/20 text-warm-white rounded-sm hover:border-acid-lime hover:text-acid-lime"
            >
              <span>muditkatre.mk@gmail.com</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
