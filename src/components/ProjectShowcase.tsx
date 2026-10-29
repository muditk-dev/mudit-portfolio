import React, { useState } from 'react';
import { Github, Terminal, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { VarshaMitraVisual } from './project-visuals/VarshaMitraVisual';
import { SentinelVisual } from './project-visuals/SentinelVisual';
import { HomeGenVisual } from './project-visuals/HomeGenVisual';
import { HelperVisual } from './project-visuals/HelperVisual';
import { FireDeptVisual } from './project-visuals/FireDeptVisual';
import ProjectDetailModal from './ProjectDetailModal';

export const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderProjectVisual = (projectId: string) => {
    switch (projectId) {
      case 'varshamitra':
        return <VarshaMitraVisual />;
      case 'aicte-sentinel':
        return <SentinelVisual />;
      case 'homegen':
        return <HomeGenVisual />;
      case 'verified-domestic-helper':
        return <HelperVisual />;
      case 'fire-dept-monitoring':
        return <FireDeptVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="work" className="relative py-28 bg-obsidian border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-white/[0.08] pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-acid-lime tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>INDEX: 01 // SELECTED WORK</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-warm-white">
              REAL WORK <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-white via-white/80 to-metadata-dim">
                ENGINEERED FIRST.
              </span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-metadata-light space-y-2">
            <p>
              Documented technical systems spanning AI weather prediction, automated governance pipelines, WebGL spatial synthesis, and national hackathon platforms.
            </p>
            <div className="flex items-center gap-4 text-metadata-dim text-[11px] pt-2">
              <span>5 CURATED CASE STUDIES</span>
              <span>&bull;</span>
              <span className="text-acid-lime">NO SYNTHETIC METRICS</span>
            </div>
          </div>
        </div>

        {/* Project Vertical Showcase List */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="relative group transition-all"
                style={{
                  ['--project-accent' as any]: project.accentColor
                }}
              >
                {/* Asymmetric Split Layout */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left Column (Metadata & Narrative) */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between order-2 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      {/* Technical Monospace Tag Bar */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="font-mono text-sm font-bold text-acid-lime">
                          [{project.number}]
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-metadata-light border border-white/10 px-2.5 py-0.5 rounded-sm">
                          {project.category}
                        </span>
                        <span className="font-mono text-xs text-metadata-dim">
                          {project.year}
                        </span>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-warm-white/80">
                          {project.status}
                        </span>
                      </div>

                      {/* Project Title & Subtitle */}
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-warm-white mb-3 group-hover:text-acid-lime transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-metadata-light mb-6">
                        {project.subtitle}
                      </p>

                      {/* Problem Statement Box */}
                      <div className="mb-6 p-4 rounded-sm bg-white/[0.02] border-l-2 border-acid-lime/70 border-y border-r border-white/[0.06]">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-metadata-dim block mb-1">
                          PROBLEM
                        </span>
                        <p className="text-xs sm:text-sm text-warm-white/90 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* Concept & Documented Contribution */}
                      <div className="space-y-3 mb-8">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-metadata-dim block mb-1">
                            WHAT THE SYSTEM DOES
                          </span>
                          <p className="text-sm text-metadata-light leading-relaxed">
                            {project.concept}
                          </p>
                        </div>

                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-acid-lime block mb-1">
                            MY DOCUMENTED CONTRIBUTION
                          </span>
                          <p className="text-sm text-warm-white/95 leading-relaxed font-normal">
                            {project.myRole}
                          </p>
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="mb-8">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-metadata-dim block mb-2">
                          STACK & ARCHITECTURE
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 7).map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-[11px] px-2.5 py-1 rounded-sm border border-white/10 bg-white/[0.02] text-metadata-light hover:border-acid-lime/30 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 7 && (
                            <span className="font-mono text-[11px] px-2 py-1 rounded-sm border border-white/10 text-metadata-dim">
                              +{project.technologies.length - 7} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-warm-white text-obsidian font-mono text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-acid-lime transition-all duration-200"
                      >
                        <span>VIEW ARCHITECTURE DOSSIER</span>
                        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </button>

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-metadata-light hover:text-acid-lime transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>SOURCE</span>
                        </a>
                      ) : (
                        <span className="font-mono text-[11px] text-metadata-dim italic">
                          [PRIVATE / SIH DOSSIER]
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column (Distinct Custom Interactive Visual) */}
                  <div
                    className={`lg:col-span-6 order-1 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="sticky top-28 h-full min-h-[340px] flex flex-col justify-center">
                      <div className="relative w-full h-full rounded border border-white/10 bg-obsidian-subtle/40 backdrop-blur-sm overflow-hidden shadow-xl transition-all duration-300 group-hover:border-white/20">
                        {renderProjectVisual(project.id)}
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-metadata-dim px-1">
                        <span>INTERACTIVE SYSTEM VISUALIZATION</span>
                        <span>CLICK DOSSIER FOR VERIFIED SPECS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Accessible Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectShowcase;
