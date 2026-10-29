import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import { experienceItems } from '../data/experience';

export const ExperienceTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'Internship' | 'Leadership'>('ALL');

  const filteredItems = experienceItems.filter((item) => {
    if (filter === 'ALL') return true;
    if (filter === 'Internship') return item.roleType === 'Internship';
    if (filter === 'Leadership') return item.roleType === 'Leadership' || item.roleType === 'Forum Role';
    return true;
  });

  return (
    <section id="experience" className="relative py-28 bg-obsidian border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-white/[0.08] pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-acid-lime tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>INDEX: 04 // EXPERIENCE & LEADERSHIP</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-warm-white">
              TRACK RECORD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-white via-white/80 to-metadata-dim">
                &amp; PROVEN RESPONSIBILITY.
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-3 font-mono text-xs text-metadata-light">
            <p>
              Industry internships in data analytics &amp; cybersecurity combined with multi-year hackathon and collegiate organizational leadership.
            </p>
            {/* Filter Pills */}
            <div className="flex items-center gap-2 pt-2">
              {(['ALL', 'Internship', 'Leadership'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-3 py-1 rounded-sm text-[11px] font-mono uppercase tracking-wider transition-all ${
                    filter === type
                      ? 'bg-acid-lime text-obsidian font-bold shadow-[0_0_15px_rgba(198,255,77,0.25)]'
                      : 'bg-white/[0.02] text-metadata-light border border-white/10 hover:border-white/30'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Structure */}
        <div className="relative border-l border-white/15 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group transition-all"
            >
              {/* Timeline Beacon Point */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-obsidian border-2 border-white/30 group-hover:border-acid-lime group-hover:scale-125 transition-all duration-200 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-acid-lime" />
              </div>

              {/* Entry Card */}
              <div className="p-6 rounded border border-white/10 bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/20 transition-all duration-200">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-acid-lime uppercase tracking-wider">
                      {item.organization}
                    </span>
                    <span className="font-mono text-xs text-metadata-dim">&bull;</span>
                    <span className="font-mono text-xs text-metadata-light">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-white/10 bg-white/[0.02] text-metadata-light">
                      {item.roleType}
                    </span>
                    {item.highlight && (
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-acid-lime/30 bg-acid-lime/10 text-acid-lime hidden sm:inline-block">
                        {item.highlight}
                      </span>
                    )}
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="text-2xl font-display font-bold text-warm-white mb-4 group-hover:text-acid-lime transition-colors">
                  {item.title}
                </h3>

                {/* Description Bullets */}
                <ul className="space-y-2 mb-6 text-sm text-metadata-light leading-relaxed">
                  {item.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-acid-lime font-mono text-xs mt-0.5">&gt;</span>
                      <span className="text-warm-white/90">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies / Competencies */}
                {item.technologies && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-0.5 rounded-sm bg-white/[0.02] border border-white/10 text-metadata-dim"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
