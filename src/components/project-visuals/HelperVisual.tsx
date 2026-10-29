import React, { useState } from 'react';
import { UserCheck, ShieldCheck, Check } from 'lucide-react';

export const HelperVisual: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'Driver' | 'Cook' | 'Housekeeper'>('Cook');

  return (
    <div className="relative w-full h-full min-h-[320px] bg-[#140e1f] rounded-sm border border-purple-500/20 p-5 flex flex-col justify-between overflow-hidden font-mono select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(167,139,250,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-purple-500/20 pb-3 text-xs">
        <div className="flex items-center gap-2 text-purple-400">
          <UserCheck className="w-4 h-4" />
          <span className="font-bold tracking-wider">DOMESTIC WORKFORCE TRUST PIPELINE</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-purple-300">
          <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
          <span>VETTING VERIFIED</span>
        </div>
      </div>

      {/* Central Visual: Service Allocation & Verification Cards */}
      <div className="relative z-10 py-4 my-auto space-y-3">
        {/* Role Category Tabs */}
        <div className="flex gap-2">
          {(['Cook', 'Driver', 'Housekeeper'] as const).map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`flex-1 py-1.5 px-3 rounded text-[11px] border transition-all ${
                selectedRole === role
                  ? 'border-purple-400 bg-purple-500/25 text-warm-white font-bold'
                  : 'border-purple-500/20 bg-purple-950/20 text-metadata-light hover:text-white'
              }`}
            >
              {role.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Mock Verification Dossier */}
        <div className="p-3 bg-purple-950/30 border border-purple-500/30 rounded text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-warm-white font-semibold">VERIFICATION DOSSIER #VK-4091</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
              <Check className="w-2.5 h-2.5" /> AADHAAR & RECORD CLEARED
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px] text-metadata-light pt-1">
            <div>
              <span className="text-metadata-dim block">ASSIGNED ROLE</span>
              <span className="text-purple-300 font-bold">{selectedRole} (Full-time / Day)</span>
            </div>
            <div>
              <span className="text-metadata-dim block">SERVICE WORKFLOW</span>
              <span className="text-warm-white">Direct Booking Request Active</span>
            </div>
          </div>

          <div className="pt-2 border-t border-purple-500/20 flex items-center justify-between text-[10px]">
            <span className="text-metadata-light">BACKEND: PHP + MYSQL RELATIONAL ENGINE</span>
            <span className="text-purple-400 font-semibold">DISPATCH STATUS: READY</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-purple-500/20 text-[10px] text-metadata-light">
        <span>SECURITY PROTOCOL: IDENTITY HASHING</span>
        <span className="text-purple-400">ESTABLISHED 2024</span>
      </div>
    </div>
  );
};
