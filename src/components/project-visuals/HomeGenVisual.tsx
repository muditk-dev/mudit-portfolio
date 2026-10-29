import React, { useState } from 'react';
import { Box, Layers, CheckCircle, Clock } from 'lucide-react';

export const HomeGenVisual: React.FC = () => {
  const [viewMode, setViewMode] = useState<'3d' | 'blueprint'>('3d');
  const [selectedRoom, setSelectedRoom] = useState<'Living' | 'Master' | 'Kitchen' | 'Studio'>('Living');

  const roomSpecs = {
    Living: { area: '280 sq ft', dims: '14\' x 20\'', implemented: true },
    Master: { area: '210 sq ft', dims: '14\' x 15\'', implemented: true },
    Kitchen: { area: '140 sq ft', dims: '10\' x 14\'', implemented: true },
    Studio: { area: '160 sq ft', dims: '10\' x 16\'', implemented: true }
  };

  return (
    <div className="relative w-full h-full min-h-[320px] bg-[#1a140d] rounded-sm border border-amber-500/20 p-5 flex flex-col justify-between overflow-hidden font-mono select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-amber-500/20 pb-3 text-xs">
        <div className="flex items-center gap-2 text-amber-400">
          <Box className="w-4 h-4" />
          <span className="font-bold tracking-wider">HOMEGEN &bull; SPATIAL LAYOUT SYNTHESIS</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode(viewMode === '3d' ? 'blueprint' : '3d')}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] hover:bg-amber-500/30 transition-colors"
          >
            <Layers className="w-3 h-3" />
            <span>MODE: {viewMode.toUpperCase()}</span>
          </button>
        </div>
      </div>

      {/* Interactive Blueprint / Isometric Spatial Graphic */}
      <div className="relative z-10 py-4 my-auto flex flex-col items-center justify-center">
        {/* SVG Blueprint Canvas */}
        <div className="relative w-full max-w-sm h-44 bg-amber-950/20 border border-amber-500/30 rounded p-2 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Grid Lines */}
            <defs>
              <pattern id="archGrid" width="16" height="16" patternUnits="userSpaceOnUse">
                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#F59E0B" strokeWidth="0.3" strokeOpacity="0.25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#archGrid)" />

            {/* Room Polygons */}
            {/* Living Room */}
            <g onClick={() => setSelectedRoom('Living')} className="cursor-pointer group">
              <rect
                x="30"
                y="20"
                width="140"
                height="70"
                fill={selectedRoom === 'Living' ? 'rgba(245, 158, 11, 0.25)' : 'rgba(245, 158, 11, 0.08)'}
                stroke="#F59E0B"
                strokeWidth={selectedRoom === 'Living' ? 2 : 1}
              />
              <text x="50" y="58" fill="#F4F2EC" fontSize="10" fontFamily="monospace">LIVING ROOM</text>
              <text x="50" y="72" fill="#F59E0B" fontSize="8" fontFamily="monospace">14' x 20'</text>
            </g>

            {/* Master Suite */}
            <g onClick={() => setSelectedRoom('Master')} className="cursor-pointer group">
              <rect
                x="180"
                y="20"
                width="110"
                height="70"
                fill={selectedRoom === 'Master' ? 'rgba(245, 158, 11, 0.25)' : 'rgba(245, 158, 11, 0.08)'}
                stroke="#F59E0B"
                strokeWidth={selectedRoom === 'Master' ? 2 : 1}
              />
              <text x="195" y="58" fill="#F4F2EC" fontSize="10" fontFamily="monospace">MASTER SUITE</text>
              <text x="195" y="72" fill="#F59E0B" fontSize="8" fontFamily="monospace">14' x 15'</text>
            </g>

            {/* Kitchen */}
            <g onClick={() => setSelectedRoom('Kitchen')} className="cursor-pointer group">
              <rect
                x="30"
                y="95"
                width="110"
                height="50"
                fill={selectedRoom === 'Kitchen' ? 'rgba(245, 158, 11, 0.25)' : 'rgba(245, 158, 11, 0.08)'}
                stroke="#F59E0B"
                strokeWidth={selectedRoom === 'Kitchen' ? 2 : 1}
              />
              <text x="45" y="125" fill="#F4F2EC" fontSize="10" fontFamily="monospace">KITCHEN</text>
            </g>

            {/* Studio / Workspace */}
            <g onClick={() => setSelectedRoom('Studio')} className="cursor-pointer group">
              <rect
                x="150"
                y="95"
                width="140"
                height="50"
                fill={selectedRoom === 'Studio' ? 'rgba(245, 158, 11, 0.25)' : 'rgba(245, 158, 11, 0.08)'}
                stroke="#F59E0B"
                strokeWidth={selectedRoom === 'Studio' ? 2 : 1}
              />
              <text x="175" y="125" fill="#F4F2EC" fontSize="10" fontFamily="monospace">STUDIO / OFFICE</text>
            </g>

            {/* Dimension arrow annotation */}
            <line x1="30" y1="12" x2="290" y2="12" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" />
            <text x="145" y="10" fill="#F59E0B" fontSize="8" textAnchor="middle" fontFamily="monospace">TOTAL SPAN: 42 FT</text>
          </svg>
        </div>

        {/* Selected Room Metadata */}
        <div className="mt-3 w-full max-w-sm flex items-center justify-between text-[11px] px-1">
          <span className="text-warm-white font-bold">{selectedRoom.toUpperCase()} ZONE:</span>
          <span className="text-amber-400">{roomSpecs[selectedRoom].dims} ({roomSpecs[selectedRoom].area})</span>
          <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
            <CheckCircle className="w-3 h-3" /> Layout Implemented
          </span>
        </div>
      </div>

      {/* Distinction Bar between Implemented vs In-Development */}
      <div className="relative z-10 pt-3 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-2 text-[10px]">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <CheckCircle className="w-3 h-3" />
          <span>2D/3D GEOMETRY GENERATOR: OPERATIONAL</span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
          <Clock className="w-3 h-3" />
          <span>COST & MATERIAL ESTIMATOR: IN PROGRESS</span>
        </div>
      </div>
    </div>
  );
};
