import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { educationData, certificationsData } from '../data/experience';

export const EducationSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-obsidian border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-acid-lime tracking-widest uppercase mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>ACADEMIC FOUNDATION</span>
            </div>

            <div className="p-6 rounded border border-white/10 bg-white/[0.015] space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-metadata-dim">
                <span className="flex items-center gap-1.5 text-acid-lime">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{educationData.graduationYear}</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{educationData.location}</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-warm-white">
                  {educationData.institution}
                </h3>
                <p className="text-base text-metadata-light mt-1 font-mono">
                  {educationData.degree}
                </p>
              </div>

              {educationData.notes && (
                <p className="text-xs font-mono text-metadata-dim leading-relaxed pt-3 border-t border-white/[0.06]">
                  {educationData.notes}
                </p>
              )}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-acid-lime tracking-widest uppercase mb-2">
              <Award className="w-4 h-4" />
              <span>VERIFIED CERTIFICATIONS</span>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 rounded border border-white/10 bg-white/[0.015] hover:border-white/20 transition-colors flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <h4 className="text-base font-display font-semibold text-warm-white">
                      {cert.title}
                    </h4>
                    <p className="font-mono text-xs text-metadata-light">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-acid-lime px-2.5 py-1 rounded bg-acid-lime/10 border border-acid-lime/20 shrink-0">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
