import React, { useState } from 'react';
import { Terminal, Search, Layers, Cpu, Database, Brain, Wrench, Sparkles, Code2 } from 'lucide-react';
import { skillCategories, allSkillsList } from '../data/skills';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'LANGUAGES':
        return <Code2 className="w-4 h-4 text-acid-lime" />;
      case 'FRONTEND':
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'BACKEND':
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'DATABASES':
        return <Database className="w-4 h-4 text-purple-400" />;
      case 'AI/ML & ANALYTICS':
        return <Brain className="w-4 h-4 text-amber-400" />;
      case 'DEVOPS & TESTING':
        return <Wrench className="w-4 h-4 text-rose-400" />;
      case 'AI INTEGRATION':
        return <Sparkles className="w-4 h-4 text-acid-lime" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  const filteredCategories = skillCategories.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
    return {
      ...cat,
      matchingSkills,
      hasMatches: matchingSkills.length > 0,
    };
  }).filter((cat) => {
    if (selectedCategory !== 'ALL' && cat.name !== selectedCategory) return false;
    if (searchQuery.trim() !== '') return cat.hasMatches;
    return true;
  });

  return (
    <section id="stack" className="relative py-28 bg-obsidian border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/[0.08] pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-acid-lime tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>INDEX: 03 // TECHNICAL CONSTELLATION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-warm-white">
              VERIFIED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-lime via-white to-metadata-light">
                STACK & TOOLS.
              </span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-metadata-light space-y-3">
            <p>
              Strictly derived from real project implementations, hackathons, and certified internship work. No arbitrary percentages or artificial progress meters.
            </p>
            {/* Quick Filter Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-metadata-dim absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search specific skill (e.g. FastAPI, PyTorch, React)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-sm py-2 pl-9 pr-3 text-xs font-mono text-warm-white placeholder:text-metadata-dim focus:outline-none focus:border-acid-lime transition-colors"
                aria-label="Filter skills"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12" role="tablist" aria-label="Skill categories">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-3 py-1.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-all ${
              selectedCategory === 'ALL'
                ? 'bg-acid-lime text-obsidian font-bold shadow-[0_0_15px_rgba(198,255,77,0.3)]'
                : 'bg-white/[0.02] text-metadata-light border border-white/10 hover:border-white/30'
            }`}
          >
            ALL CATEGORIES ({allSkillsList.length})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-all ${
                selectedCategory === cat.name
                  ? 'bg-acid-lime text-obsidian font-bold shadow-[0_0_15px_rgba(198,255,77,0.3)]'
                  : 'bg-white/[0.02] text-metadata-light border border-white/10 hover:border-white/30'
              }`}
            >
              {getCategoryIcon(cat.name)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Constellation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.name}
              className="p-6 rounded border border-white/10 bg-white/[0.015] hover:border-white/20 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(cat.name)}
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-warm-white">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-metadata-dim">
                    {cat.matchingSkills.length} SKILLS
                  </span>
                </div>

                <p className="font-mono text-[11px] text-metadata-dim leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.matchingSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-sm font-mono text-xs bg-white/[0.03] text-warm-white border border-white/10 hover:border-acid-lime/50 hover:text-acid-lime transition-all duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-metadata-dim">
                <span>VERIFIED PROFICIENCY</span>
                <span className="text-acid-lime font-mono">[READY FOR WORK]</span>
              </div>
            </div>
          ))}
        </div>

        {/* Full Accessible List for Screen Readers & Fallback */}
        <div className="mt-16 p-6 rounded bg-white/[0.01] border border-white/[0.06]">
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-metadata-dim">
            <span className="uppercase tracking-widest">COMPLETE INDEXED REPERTOIRE (ACCESSIBLE VIEW)</span>
            <span>TOTAL: {allSkillsList.length} VERIFIED CAPABILITIES</span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-mono text-metadata-light">
            {allSkillsList.map((skill, i) => (
              <span key={skill} className="hover:text-acid-lime transition-colors">
                {skill}{i < allSkillsList.length - 1 ? ' \u2022 ' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
