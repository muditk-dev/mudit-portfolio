import React, { useEffect } from 'react';
import { X, Github, CheckCircle, Clock, Shield, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-obsidian/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-obsidian border border-white/15 rounded-lg shadow-2xl overflow-y-auto flex flex-col font-sans text-warm-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-obsidian/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-acid-lime border border-acid-lime/30 px-2 py-0.5 rounded bg-acid-lime/10">
              PROJECT {project.number}
            </span>
            <span className="font-mono text-xs text-metadata-light uppercase tracking-wider">
              {project.category} &bull; {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-metadata-light hover:text-white border border-white/10 rounded hover:border-acid-lime/50 transition-colors focus-visible:outline-acid-lime"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Title and context */}
          <div>
            <h2 id="modal-title" className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-warm-white mb-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-metadata-light leading-relaxed">
              {project.subtitle}
            </p>
            {project.context && (
              <div className="mt-3 inline-flex items-center gap-2 font-mono text-xs text-acid-lime bg-acid-lime/10 border border-acid-lime/20 px-3 py-1 rounded">
                <Shield className="w-3.5 h-3.5" />
                <span>{project.context}</span>
              </div>
            )}
          </div>

          {/* Status and Verification Badge */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-white/[0.02] border border-white/10 rounded">
            <div>
              <span className="font-mono text-[10px] text-metadata-dim uppercase block">IMPLEMENTATION STATUS</span>
              <span className="font-mono text-xs font-semibold text-warm-white flex items-center gap-1.5 mt-1">
                {project.status === 'In Active Development' ? (
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <CheckCircle className="w-3.5 h-3.5 text-acid-lime" />
                )}
                {project.status}
              </span>
            </div>

            <div>
              <span className="font-mono text-[10px] text-metadata-dim uppercase block">DOCUMENTED ROLE</span>
              <span className="font-mono text-xs font-semibold text-acid-lime mt-1 block">
                {project.myRole.split(':')[0] || 'Core Developer'}
              </span>
            </div>

            <div>
              <span className="font-mono text-[10px] text-metadata-dim uppercase block">SOURCE REPOSITORY</span>
              <span className="font-mono text-xs text-metadata-light mt-1 block">
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-acid-lime hover:underline flex items-center gap-1">
                    <Github className="w-3 h-3" /> View Source
                  </a>
                ) : (
                  <span className="text-metadata-dim italic">SIH / Institutional (Private)</span>
                )}
              </span>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-acid-lime flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-acid-lime" />
              01 &bull; PROBLEM STATEMENT
            </h3>
            <p className="text-sm md:text-base text-warm-white/90 leading-relaxed pl-3.5 border-l border-white/15">
              {project.problem}
            </p>
          </div>

          {/* Architectural Concept & Solution */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-acid-lime flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-acid-lime" />
              02 &bull; SYSTEM ARCHITECTURE & CONCEPT
            </h3>
            <p className="text-sm md:text-base text-warm-white/90 leading-relaxed pl-3.5 border-l border-white/15">
              {project.concept}
            </p>
          </div>

          {/* Documented Contribution */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-acid-lime flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-acid-lime" />
              03 &bull; MY DOCUMENTED CONTRIBUTION
            </h3>
            <div className="p-4 bg-acid-lime/[0.04] border border-acid-lime/20 rounded text-sm text-warm-white leading-relaxed">
              {project.myRole}
            </div>
          </div>

          {/* Workflow Stages Diagram */}
          {project.workflowStages && project.workflowStages.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-acid-lime flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-acid-lime" />
                04 &bull; PIPELINE & WORKFLOW STAGES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {project.workflowStages.map((stage, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 bg-white/[0.02] border border-white/10 rounded font-mono text-xs">
                    <span className="text-acid-lime font-bold">0{idx + 1}</span>
                    <ArrowRight className="w-3 h-3 text-metadata-dim shrink-0" />
                    <span className="text-warm-white">{stage}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key System Features */}
          {project.features && (
            <div className="space-y-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-acid-lime flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-acid-lime" />
                05 &bull; VERIFIED SYSTEM CAPABILITIES
              </h3>
              <ul className="space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-metadata-light">
                    <CheckCircle className="w-4 h-4 text-acid-lime shrink-0 mt-0.5" />
                    <span className="text-warm-white/95">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-acid-lime flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-acid-lime" />
              06 &bull; RESUME-VERIFIED TECHNOLOGIES
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-sm bg-white/[0.03] border border-white/10 font-mono text-xs text-metadata-light"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-4 p-6 bg-obsidian/95 backdrop-blur-md border-t border-white/10">
          <div className="font-mono text-xs text-metadata-dim">
            VERIFIED RESUME RECORD &bull; MUDIT KATRE
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-acid-lime text-warm-white hover:text-acid-lime font-mono text-xs rounded transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB REPO</span>
              </a>
            ) : (
              <span className="px-3 py-2 border border-white/10 rounded font-mono text-xs text-metadata-dim cursor-not-allowed">
                REPO: INSTITUTIONAL / PRIVATE
              </span>
            )}

            <button
              onClick={onClose}
              className="px-6 py-2 bg-acid-lime text-obsidian font-mono text-xs font-bold uppercase rounded hover:bg-acid-lime-hover transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
