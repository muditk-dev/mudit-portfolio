import React, { useState } from 'react';
import { Shield, CheckCircle2, FileText, Lock, Database } from 'lucide-react';

const stages = [
  { id: 1, name: 'Intake Dossier', status: 'Approved', agent: 'System' },
  { id: 2, name: 'Scrutiny Committee', status: 'Approved', agent: 'Expert Panel' },
  { id: 3, name: 'Deficiency Audit', status: 'Resolved', agent: 'Compliance Unit' },
  { id: 4, name: 'Regional Council', status: 'In Review', agent: 'Regional Office' },
  { id: 5, name: 'Hearing Board', status: 'Pending', agent: 'Appeals' },
  { id: 6, name: 'Statutory Verification', status: 'Pending', agent: 'Legal' },
  { id: 7, name: 'Executive Clearance', status: 'Pending', agent: 'Bureau Chief' },
  { id: 8, name: 'Digital NOC Stamp', status: 'Pending', agent: 'Secure Key Vault' }
];

export const SentinelVisual: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(stages[3]);

  return (
    <div className="relative w-full h-full min-h-[320px] bg-[#0d1712] rounded-sm border border-emerald-500/20 p-5 flex flex-col justify-between overflow-hidden font-mono select-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/20 pb-3 text-xs">
        <div className="flex items-center gap-2 text-emerald-400">
          <Shield className="w-4 h-4" />
          <span className="font-bold tracking-wider">AICTE REGULATION BUREAU &bull; COMPLIANCE PIPELINE</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-emerald-300">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span>MINIO S3 ENCRYPTED</span>
        </div>
      </div>

      {/* Stage Flow Nodes */}
      <div className="relative z-10 py-4 my-auto">
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-2 mb-4">
          {stages.slice(0, 4).map((stage) => {
            const isSelected = selectedStage.id === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(stage)}
                className={`p-2 rounded border text-left transition-all ${
                  isSelected
                    ? 'border-emerald-400 bg-emerald-500/20 text-warm-white shadow-[0_0_15px_rgba(52,211,153,0.25)]'
                    : 'border-emerald-500/15 bg-emerald-950/20 text-metadata-light hover:border-emerald-500/40'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] mb-1">
                  <span className="font-bold text-emerald-400">0{stage.id}</span>
                  {stage.status === 'Approved' ? (
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  ) : stage.status === 'In Review' ? (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  )}
                </div>
                <div className="text-[11px] font-medium leading-tight truncate">{stage.name}</div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
          {stages.slice(4, 8).map((stage) => {
            const isSelected = selectedStage.id === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(stage)}
                className={`p-2 rounded border text-left transition-all ${
                  isSelected
                    ? 'border-emerald-400 bg-emerald-500/20 text-warm-white shadow-[0_0_15px_rgba(52,211,153,0.25)]'
                    : 'border-emerald-500/15 bg-emerald-950/20 text-metadata-light hover:border-emerald-500/40'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] mb-1">
                  <span className="font-bold text-emerald-400">0{stage.id}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
                <div className="text-[11px] font-medium leading-tight truncate">{stage.name}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="mt-4 p-3 bg-emerald-950/40 border border-emerald-500/30 rounded text-[11px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-warm-white font-semibold">STAGE 0{selectedStage.id}: {selectedStage.name}</span>
            <span className="text-emerald-300">({selectedStage.agent})</span>
          </div>
          <div className="flex items-center gap-3 text-metadata-light text-[10px]">
            <span className="flex items-center gap-1">
              <Database className="w-3 h-3 text-emerald-400" /> PostgreSQL Logged
            </span>
            <span className="text-emerald-400 font-bold uppercase">{selectedStage.status}</span>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-emerald-500/20 text-[10px] text-metadata-light">
        <span>SECURITY TIER: RBAC ENFORCED</span>
        <span className="text-emerald-400">8 OF 8 STAGES AUTOMATED</span>
      </div>
    </div>
  );
};
