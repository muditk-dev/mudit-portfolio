import React from 'react';
import { Flame, Award, Clock, CheckCircle2 } from 'lucide-react';

export const FireDeptVisual: React.FC = () => {

  return (
    <div className="relative w-full h-full min-h-[320px] bg-[#1a0f12] rounded-sm border border-rose-500/20 p-5 flex flex-col justify-between overflow-hidden font-mono select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,113,133,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-rose-500/20 pb-3 text-xs">
        <div className="flex items-center gap-2 text-rose-400">
          <Flame className="w-4 h-4 animate-pulse text-rose-500" />
          <span className="font-bold tracking-wider">FIRE DEPT MONITORING SYSTEM</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px]">
          <Award className="w-3 h-3 text-amber-400" />
          <span>SIH 2024 NATIONAL FINALIST</span>
        </div>
      </div>

      {/* Central Interactive Operational Dashboard Interface */}
      <div className="relative z-10 py-4 my-auto space-y-3">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 bg-rose-950/30 border border-rose-500/30 rounded">
            <span className="text-[10px] text-metadata-dim block">ACTIVE AUDITS</span>
            <span className="text-base font-bold text-warm-white">42 UNITS</span>
          </div>
          <div className="p-2.5 bg-rose-950/30 border border-rose-500/30 rounded">
            <span className="text-[10px] text-metadata-dim block">NOC ISSUED</span>
            <span className="text-base font-bold text-emerald-400">128 APPR</span>
          </div>
          <div className="p-2.5 bg-rose-950/30 border border-rose-500/30 rounded">
            <span className="text-[10px] text-metadata-dim block">MY ROLE</span>
            <span className="text-xs font-bold text-rose-300">FRONTEND LEAD</span>
          </div>
        </div>

        {/* Inspection Lifecycle Tracker */}
        <div className="p-3 bg-rose-950/20 border border-rose-500/20 rounded text-xs space-y-2">
          <div className="flex items-center justify-between text-[11px] text-metadata-light">
            <span>INSPECTION DISPATCH #FD-8924</span>
            <span className="text-rose-400 font-semibold">ZONE: COMMERCIAL HIGH-RISE</span>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1.5 text-emerald-400 text-[10px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Application</span>
            </div>
            <div className="h-0.5 w-6 bg-emerald-500/50" />
            <div className="flex items-center gap-1.5 text-emerald-400 text-[10px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Scrutiny</span>
            </div>
            <div className="h-0.5 w-6 bg-rose-500/50" />
            <div className="flex items-center gap-1.5 text-rose-300 font-bold text-[10px]">
              <Clock className="w-3.5 h-3.5 animate-spin" />
              <span>Site Audit</span>
            </div>
            <div className="h-0.5 w-6 bg-white/10" />
            <div className="text-metadata-dim text-[10px]">
              <span>NOC Grant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Role Statement */}
      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-rose-500/20 text-[10px] text-metadata-light">
        <span className="text-rose-400">DOCUMENTED CONTRIBUTION: DASHBOARD FRONTEND</span>
        <span>SIH GRAND FINALE STAGE</span>
      </div>
    </div>
  );
};
