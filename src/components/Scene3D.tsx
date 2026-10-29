import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Sculptural Core with Chrome / Graphite Metallic Finish
function SculpturalCore({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireframeRef = useRef<THREE.Mesh>(null!);
  const ringRef1 = useRef<THREE.Group>(null!);
  const ringRef2 = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Smooth idle rotation
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.22;

      // Mouse interactive tilt with gentle damping
      meshRef.current.rotation.x += (mousePos.current.y * 0.5 - meshRef.current.rotation.x * 0.1) * delta * 2;
      meshRef.current.rotation.y += (mousePos.current.x * 0.5 - meshRef.current.rotation.y * 0.1) * delta * 2;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -t * 0.1;
      wireframeRef.current.rotation.y = -t * 0.18;
      wireframeRef.current.rotation.z = t * 0.08;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.z = t * 0.12;
      ringRef1.current.rotation.x = Math.sin(t * 0.2) * 0.3;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.z = -t * 0.09;
      ringRef2.current.rotation.y = Math.cos(t * 0.25) * 0.4;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Graphite/Chrome Complex Geometry: TorusKnot + Faceted Core */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={meshRef} scale={1.25} castShadow receiveShadow>
          <torusKnotGeometry args={[1, 0.32, 128, 32, 2, 3]} />
          <meshPhysicalMaterial
            color="#141416"
            metalness={0.92}
            roughness={0.18}
            clearcoat={0.9}
            clearcoatRoughness={0.1}
            reflectivity={0.9}
            wireframe={false}
          />
        </mesh>

        {/* Outer technical wireframe lattice */}
        <mesh ref={wireframeRef} scale={1.85}>
          <icosahedronGeometry args={[1.2, 2]} />
          <meshBasicMaterial
            color="#C6FF4D"
            wireframe
            transparent
            opacity={0.16}
          />
        </mesh>

        {/* Orbital Technical Coordinate Ring 1 */}
        <group ref={ringRef1}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[2.4, 2.43, 64]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.12} side={THREE.DoubleSide} />
          </mesh>
          {/* Beacon point on Ring 1 */}
          <mesh position={[2.41, 0, 0]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshBasicMaterial color="#C6FF4D" />
          </mesh>
        </group>

        {/* Orbital Technical Coordinate Ring 2 */}
        <group ref={ringRef2} rotation={[0.6, 0.4, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[2.75, 2.77, 64]} />
            <meshBasicMaterial color="#C6FF4D" transparent opacity={0.2} side={THREE.DoubleSide} />
          </mesh>
          <mesh position={[-2.76, 0, 0]}>
            <sphereGeometry args={[0.035, 16, 16]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

// Procedural Orbital Particle Cloud
function OrbitalParticles({ count = 180 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const acidLime = new THREE.Color('#C6FF4D');
    const warmWhite = new THREE.Color('#F4F2EC');
    const graphite = new THREE.Color('#52525b');

    for (let i = 0; i < count; i++) {
      // Distribute in a spherical cloud with radius between 2.2 and 4.2
      const radius = 2.0 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      // Color distribution: mostly graphite/white with 20% acid lime beacons
      const choice = Math.random();
      const c = choice > 0.8 ? acidLime : choice > 0.4 ? warmWhite : graphite;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.04;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

// Scene Camera Controller with Scroll & Mouse Parallax
function CameraRig({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  useFrame((state, delta) => {
    // Parallax camera displacement
    const targetX = mousePos.current.x * 0.7;
    const targetY = mousePos.current.y * 0.5;

    state.camera.position.x += (targetX - state.camera.position.x) * delta * 2;
    state.camera.position.y += (targetY - state.camera.position.y) * delta * 2;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export interface Scene3DProps {
  className?: string;
  isReducedMotion?: boolean;
}

export const Scene3D: React.FC<Scene3DProps> = ({ className = '', isReducedMotion = false }) => {
  const mousePos = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mousePos.current = { x, y };
  };

  // Static / Reduced-Motion Fallback
  if (isReducedMotion) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-acid-lime/20 flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_40s_linear_infinite]" />
          <div className="w-44 h-44 rounded-full bg-gradient-to-tr from-obsidian-deep via-[#1a1a1c] to-obsidian border border-white/10 shadow-2xl flex items-center justify-center">
            <span className="font-mono text-xs text-acid-lime/70 tracking-widest">[ SPATIAL CORE ]</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full pointer-events-auto ${className}`}
      onPointerMove={handlePointerMove}
    >
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        {/* Key Light */}
        <directionalLight position={[5, 6, 4]} intensity={1.5} color="#ffffff" />
        {/* Acid Lime Rim Light */}
        <pointLight position={[-4, -3, 2]} intensity={2.2} color="#C6FF4D" />
        {/* Subtle Top Cool Light */}
        <pointLight position={[0, 5, -2]} intensity={1.0} color="#38BDF8" />

        <CameraRig mousePos={mousePos} />
        <SculpturalCore mousePos={mousePos} />
        <OrbitalParticles count={160} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
