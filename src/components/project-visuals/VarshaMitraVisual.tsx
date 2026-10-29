import React, { useState } from 'react';
import { CloudRain, Activity } from 'lucide-react';

export const VarshaMitraVisual: React.FC = () => {
  const [activeRegime, setActiveRegime] = useState<'Depression' | 'Break' | 'Active Monsoon'>('Active Monsoon');

  return (
    <div className="relative w-full h-full min-h-[320px] bg-[#0c131a] rounded-sm border border-cyan-500/20 p-5 flex flex-col justify-between overflow-hidden font-mono select-none">
      {/* Background Topographic Radar Rings & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.08)_0%,transparent_70%)] pointer-events-none" />
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="radarGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#38BDF8" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#radarGrid)" />
        {/* Isobar Contour Lines */}
        <circle cx="50%" cy="50%" r="80" fill="none" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_40s_linear_infinite]" />
        <circle cx="50%" cy="50%" r="130" fill="none" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M 20 180 Q 150 120 280 190 T 450 130" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.5" />
        <path d="M 10 120 Q 120 70 300 130 T 480 80" fill="none" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.3" />
      </svg>

      {/* Header telemetry */}
      <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/20 pb-3 text-xs">
        <div className="flex items-center gap-2 text-cyan-400">
          <CloudRain className="w-4 h-4 animate-pulse" />
          <span className="font-bold tracking-wider">NCMRWF &bull; BIAS CALIBRATION ENGINE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] text-cyan-200">U-NET + XGBOOST ACTIVE</span>
        </div>
      </div>

      {/* Center Simulated District Radar Nodes */}
      <div className="relative z-10 py-6 my-auto flex flex-col items-center justify-center">
        <div className="relative w-56 h-36 border border-cyan-500/30 rounded bg-cyan-950/20 p-3 backdrop-blur-sm">
          <div className="flex items-center justify-between text-[10px] text-cyan-300 mb-2">
            <span>DISTRICT: MAHARASHTRA_ZONE_04</span>
            <span className="text-acid-lime font-semibold">ERROR -34.2% &rarr; +1.4%</span>
          </div>

          {/* Bar Comparison: Raw NWP vs Bias-Corrected */}
          <div className="space-y-2 mt-2">
            <div>
              <div className="flex justify-between text-[9px] text-metadata-light mb-1">
                <span>RAW NWP FORECAST</span>
                <span className="text-rose-400">82.4 mm/day (Overestimate)</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full w-[82%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[9px] text-metadata-light mb-1">
                <span>VARSHAMITRA CORRECTED</span>
                <span className="text-acid-lime font-bold">54.1 mm/day (Calibrated)</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-acid-lime h-full w-[54%] transition-all duration-300" />
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[9px] text-cyan-400/80 pt-2 border-t border-cyan-500/20">
            <span>HEAVY RAIN EXCEEDANCE: 18.2%</span>
            <span>SHAP LOCAL EXPLAINED</span>
          </div>
        </div>
      </div>

      {/* Footer Regime Selector */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-cyan-500/20 text-[10px]">
        <div className="text-metadata-light flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-cyan-400" />
          <span>SYNOPTIC REGIME:</span>
        </div>
        <div className="flex items-center gap-1">
          {(['Active Monsoon', 'Depression', 'Break'] as const).map((regime) => (
            <button
              key={regime}
              onClick={() => setActiveRegime(regime)}
              className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                activeRegime === regime
                  ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400'
                  : 'bg-white/5 text-metadata-light hover:text-white'
              }`}
            >
              {regime}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
