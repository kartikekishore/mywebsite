'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

function AstronautModel({ onClick, theme }: { onClick: (e: ThreeEvent<MouseEvent>) => void, theme: string }) {
  const astronautRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (astronautRef.current) {
      const time = state.clock.elapsedTime;
      astronautRef.current.position.y = Math.sin(time * 0.5) * 0.1;
      astronautRef.current.position.x = Math.sin(time * 0.3) * 0.05;
      astronautRef.current.rotation.y = Math.sin(time * 0.3) * 0.1; // Face the user with subtle sway
      astronautRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group
      ref={astronautRef}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]} // Face the user directly
      scale={0.78}
      onClick={onClick}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        document.body.style.cursor = 'default';
      }}
    >
      {/* Main Body - Enhanced for both themes with better contrast */}
      {theme === 'dark' && (
        <mesh position={[0, 0, 0]} scale={1.08}>
          <capsuleGeometry args={[0.5, 0.8, 0.1, 1]} />
          <meshStandardMaterial color="#000" />
        </mesh>
      )}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.5, 0.8, 0.1, 1]} />
        <meshStandardMaterial color={theme === 'dark' ? "#e5e7eb" : "#f8fafc"} />
      </mesh>

      {/* Suit Seams/Creases - Light theme for definition */}
      {theme !== 'dark' && (
        <>
          {/* Horizontal chest seam */}
          <mesh position={[0, 0.15, 0.48]} rotation={[0, 0, 0]}>
            <boxGeometry args={[1.0, 0.02, 0.02]} />
            <meshStandardMaterial color="#cbd5e1" />
          </mesh>
          {/* Waist seam */}
          <mesh position={[0, -0.15, 0.48]} rotation={[0, 0, 0]}>
            <boxGeometry args={[1.0, 0.02, 0.02]} />
            <meshStandardMaterial color="#cbd5e1" />
          </mesh>
          {/* Vertical suit panels */}
          <mesh position={[0.3, 0, 0.49]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.02, 0.8, 0.02]} />
            <meshStandardMaterial color="#cbd5e1" />
          </mesh>
          <mesh position={[-0.3, 0, 0.49]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.02, 0.8, 0.02]} />
            <meshStandardMaterial color="#cbd5e1" />
          </mesh>
        </>
      )}

      {/* Chest Control Panel - Both themes */}
      <group position={[0, 0.3, 0.5]}>
        <mesh>
          <boxGeometry args={[0.4, 0.3, 0.05]} />
          <meshStandardMaterial color={theme === 'dark' ? "#1e40af" : "#2563eb"} />
        </mesh>
        {/* Control buttons */}
        <mesh position={[-0.1, 0.05, 0.03]}>
          <cylinderGeometry args={[0.03, 0.03, 0.02, 8]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>
        <mesh position={[0, 0.05, 0.03]}>
          <cylinderGeometry args={[0.03, 0.03, 0.02, 8]} />
          <meshStandardMaterial color="#22c55e" />
        </mesh>
        <mesh position={[0.1, 0.05, 0.03]}>
          <cylinderGeometry args={[0.03, 0.03, 0.02, 8]} />
          <meshStandardMaterial color="#f59e0b" />
        </mesh>
        {/* Small display screen */}
        <mesh position={[0, -0.05, 0.03]}>
          <boxGeometry args={[0.15, 0.08, 0.01]} />
          <meshStandardMaterial 
            color={theme === 'dark' ? "#000" : "#1f2937"} 
            emissive={theme === 'dark' ? "#10b981" : "#065f46"} 
            emissiveIntensity={0.3} 
          />
        </mesh>
      </group>

      {/* Belt/Utility Belt - Both themes with better definition */}
      <group position={[0, -0.2, 0]}>
        <mesh>
          <cylinderGeometry args={[0.55, 0.55, 0.1, 32]} />
          <meshStandardMaterial color={theme === 'dark' ? "#374151" : "#1f2937"} />
        </mesh>
        {/* Belt top edge - Light theme */}
        {theme !== 'dark' && (
          <mesh position={[0, 0.06, 0]}>
            <cylinderGeometry args={[0.56, 0.56, 0.02, 32]} />
            <meshStandardMaterial color="#111827" />
          </mesh>
        )}
        {/* Belt pouches */}
        <mesh position={[0.4, 0, 0]}>
          <boxGeometry args={[0.15, 0.1, 0.15]} />
          <meshStandardMaterial color={theme === 'dark' ? "#374151" : "#111827"} />
        </mesh>
        <mesh position={[-0.4, 0, 0]}>
          <boxGeometry args={[0.15, 0.1, 0.15]} />
          <meshStandardMaterial color={theme === 'dark' ? "#374151" : "#111827"} />
        </mesh>
      </group>

      {/* Helmet - Enhanced for both themes with better contrast */}
      {theme === 'dark' && (
        <mesh position={[0, 0.8, 0]} scale={1.08}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#000" />
        </mesh>
      )}
      <mesh position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color={theme === 'dark' ? "#e5e7eb" : "#f8fafc"} />
      </mesh>

      {/* Helmet Rim - Both themes with better contrast */}
      <mesh position={[0, 0.8, 0]}>
        <torusGeometry args={[0.41, 0.03, 8, 32]} />
        <meshStandardMaterial color={theme === 'dark' ? "#9ca3af" : "#374151"} />
      </mesh>

      {/* Helmet Visor - Single mesh for both themes */}
      <mesh position={[0, 0.8, 0.2]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial 
          color={theme === 'dark' ? "#60a5fa" : "#1e40af"} 
          transparent 
          opacity={theme === 'dark' ? 0.7 : 0.8}
          metalness={0.3}
          roughness={0.1}
        />
      </mesh>

      {/* Helmet Reflection - Both themes */}
      <mesh position={[-0.1, 0.9, 0.35]} rotation={[0.2, -0.3, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={theme === 'dark' ? 0.6 : 0.4} />
      </mesh>

      {/* Enhanced Backpack for both themes with better contrast */}
      {theme === 'dark' && (
        <mesh position={[0, 0, -0.3]} scale={1.08}>
          <boxGeometry args={[0.8, 0.8, 0.3]} />
          <meshStandardMaterial color="#000" />
        </mesh>
      )}
      <mesh position={[0, 0, -0.3]}>
        <boxGeometry args={[0.8, 0.8, 0.3]} />
        <meshStandardMaterial color={theme === 'dark' ? "#d1d5db" : "#f1f5f9"} />
      </mesh>

      {/* Backpack edge definition - Light theme */}
      {theme !== 'dark' && (
        <>
          {/* Top edge */}
          <mesh position={[0, 0.4, -0.3]}>
            <boxGeometry args={[0.82, 0.02, 0.32]} />
            <meshStandardMaterial color="#cbd5e1" />
          </mesh>
          {/* Bottom edge */}
          <mesh position={[0, -0.4, -0.3]}>
            <boxGeometry args={[0.82, 0.02, 0.32]} />
            <meshStandardMaterial color="#cbd5e1" />
          </mesh>
          {/* Side edges */}
          <mesh position={[0.4, 0, -0.3]}>
            <boxGeometry args={[0.02, 0.82, 0.32]} />
            <meshStandardMaterial color="#cbd5e1" />
          </mesh>
          <mesh position={[-0.4, 0, -0.3]}>
            <boxGeometry args={[0.02, 0.82, 0.32]} />
            <meshStandardMaterial color="#cbd5e1" />
          </mesh>
        </>
      )}

      {/* Backpack Details - Both themes */}
      <group position={[0, 0, -0.4]}>
        {/* Oxygen tanks */}
        <mesh position={[-0.2, 0.1, -0.05]}>
          <cylinderGeometry args={[0.08, 0.08, 0.5, 16]} />
          <meshStandardMaterial color={theme === 'dark' ? "#b91c1c" : "#dc2626"} />
        </mesh>
        <mesh position={[0.2, 0.1, -0.05]}>
          <cylinderGeometry args={[0.08, 0.08, 0.5, 16]} />
          <meshStandardMaterial color={theme === 'dark' ? "#b91c1c" : "#dc2626"} />
        </mesh>
        {/* Connecting tubes */}
        <mesh position={[0, 0.35, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
          <meshStandardMaterial color={theme === 'dark' ? "#4b5563" : "#374151"} />
        </mesh>
        {/* Control unit */}
        <mesh position={[0, -0.2, -0.05]}>
          <boxGeometry args={[0.3, 0.2, 0.1]} />
          <meshStandardMaterial color={theme === 'dark' ? "#374151" : "#1f2937"} />
        </mesh>
        {/* Additional details for dark theme */}
        {theme === 'dark' && (
          <>
            {/* Warning labels */}
            <mesh position={[-0.2, -0.1, -0.1]}>
              <boxGeometry args={[0.12, 0.06, 0.01]} />
              <meshStandardMaterial color="#fbbf24" />
            </mesh>
            <mesh position={[0.2, -0.1, -0.1]}>
              <boxGeometry args={[0.12, 0.06, 0.01]} />
              <meshStandardMaterial color="#fbbf24" />
            </mesh>
            {/* Pressure gauges */}
            <mesh position={[-0.2, 0.3, -0.1]}>
              <cylinderGeometry args={[0.04, 0.04, 0.02, 16]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
            <mesh position={[0.2, 0.3, -0.1]}>
              <cylinderGeometry args={[0.04, 0.04, 0.02, 16]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
          </>
        )}
      </group>

      {/* Enhanced Left Arm */}
      <group position={[-0.5, 0.2, 0]} rotation={[0, 0, -Math.PI / 4]}>
        {theme === 'dark' && (
          <mesh scale={1.08}>
            <capsuleGeometry args={[0.15, 0.4, 4, 8]} />
            <meshStandardMaterial color="#000" />
          </mesh>
        )}
        <mesh>
          <capsuleGeometry args={[0.15, 0.4, 4, 8]} />
          <meshStandardMaterial color={theme === 'dark' ? "#e5e7eb" : "#f8fafc"} />
        </mesh>
        {/* Arm joint seam - Light theme */}
        {theme !== 'dark' && (
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.16, 0.16, 0.02, 16]} />
            <meshStandardMaterial color="#cbd5e1" />
          </mesh>
        )}
        {/* Wrist device - Both themes */}
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 0.1, 16]} />
          <meshStandardMaterial color={theme === 'dark' ? "#4b5563" : "#374151"} />
        </mesh>
        {/* Wrist display - Both themes */}
        <mesh position={[0, -0.25, 0.19]}>
          <cylinderGeometry args={[0.1, 0.1, 0.02, 16]} />
          <meshStandardMaterial 
            color={theme === 'dark' ? "#000" : "#1f2937"} 
            emissive={theme === 'dark' ? "#3b82f6" : "#1d4ed8"} 
            emissiveIntensity={0.2} 
          />
        </mesh>
      </group>

      {/* Enhanced Right Arm - Raised in a friendly wave */}
      <group position={[0.5, 0.2, 0]} rotation={[0, 0, Math.PI / 2.5]}>
        {theme === 'dark' && (
          <mesh scale={1.08}>
            <capsuleGeometry args={[0.15, 0.4, 4, 8]} />
            <meshStandardMaterial color="#000" />
          </mesh>
        )}
        <mesh>
          <capsuleGeometry args={[0.15, 0.4, 4, 8]} />
          <meshStandardMaterial color={theme === 'dark' ? "#e5e7eb" : "#f8fafc"} />
        </mesh>
        {/* Arm joint seam - Light theme */}
        {theme !== 'dark' && (
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.16, 0.16, 0.02, 16]} />
            <meshStandardMaterial color="#cbd5e1" />
          </mesh>
        )}
        {/* Glove details - Both themes */}
        <mesh position={[0, -0.25, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color={theme === 'dark' ? "#9ca3af" : "#d1d5db"} />
        </mesh>
        {/* Glove patches - Both themes */}
        <mesh position={[0, -0.25, 0.17]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color={theme === 'dark' ? "#6b7280" : "#9ca3af"} />
        </mesh>
      </group>

      {/* Enhanced Left Leg */}
      <group position={[-0.2, -0.8, 0]}>
        {theme === 'dark' && (
          <mesh scale={1.08}>
            <capsuleGeometry args={[0.15, 0.4, 4, 8]} />
            <meshStandardMaterial color="#000" />
          </mesh>
        )}
        <mesh>
          <capsuleGeometry args={[0.15, 0.4, 4, 8]} />
          <meshStandardMaterial color={theme === 'dark' ? "#e5e7eb" : "#f8fafc"} />
        </mesh>
        {/* Leg joint seam - Light theme */}
        {theme !== 'dark' && (
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.16, 0.16, 0.02, 16]} />
            <meshStandardMaterial color="#cbd5e1" />
          </mesh>
        )}
        {/* Boot - Both themes */}
        <mesh position={[0, -0.3, 0.1]}>
          <boxGeometry args={[0.25, 0.15, 0.4]} />
          <meshStandardMaterial color={theme === 'dark' ? "#374151" : "#1f2937"} />
        </mesh>
        {/* Boot sole - Both themes */}
        <mesh position={[0, -0.375, 0.1]}>
          <boxGeometry args={[0.27, 0.05, 0.42]} />
          <meshStandardMaterial color={theme === 'dark' ? "#1f2937" : "#111827"} />
        </mesh>
      </group>

      {/* Enhanced Right Leg */}
      <group position={[0.2, -0.8, 0]}>
        {theme === 'dark' && (
          <mesh scale={1.08}>
            <capsuleGeometry args={[0.15, 0.4, 4, 8]} />
            <meshStandardMaterial color="#000" />
          </mesh>
        )}
        <mesh>
          <capsuleGeometry args={[0.15, 0.4, 4, 8]} />
          <meshStandardMaterial color={theme === 'dark' ? "#e5e7eb" : "#f8fafc"} />
        </mesh>
        {/* Leg joint seam - Light theme */}
        {theme !== 'dark' && (
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.16, 0.16, 0.02, 16]} />
            <meshStandardMaterial color="#cbd5e1" />
          </mesh>
        )}
        {/* Boot - Both themes */}
        <mesh position={[0, -0.3, 0.1]}>
          <boxGeometry args={[0.25, 0.15, 0.4]} />
          <meshStandardMaterial color={theme === 'dark' ? "#374151" : "#1f2937"} />
        </mesh>
        {/* Boot sole - Both themes */}
        <mesh position={[0, -0.375, 0.1]}>
          <boxGeometry args={[0.27, 0.05, 0.42]} />
          <meshStandardMaterial color={theme === 'dark' ? "#1f2937" : "#111827"} />
        </mesh>
      </group>

      {/* Antenna - Both themes */}
      <group position={[0.3, 1.1, 0]}>
        <mesh>
          <cylinderGeometry args={[0.01, 0.01, 0.3, 8]} />
          <meshStandardMaterial color={theme === 'dark' ? "#9ca3af" : "#6b7280"} />
        </mesh>
        <mesh position={[0, 0.18, 0]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial 
            color="#ef4444" 
            emissive="#dc2626" 
            emissiveIntensity={theme === 'dark' ? 0.5 : 0.3} 
          />
        </mesh>
      </group>

      {/* Additional Details for Dark Theme */}
      {theme === 'dark' && (
        <>
          {/* NASA Logo/Patch on chest */}
          <mesh position={[0.25, 0.1, 0.51]}>
            <cylinderGeometry args={[0.08, 0.08, 0.01, 16]} />
            <meshStandardMaterial color="#1e40af" />
          </mesh>
          {/* Flag patch on arm */}
          <mesh position={[-0.3, 0.4, 0.16]} rotation={[0, Math.PI / 4, 0]}>
            <boxGeometry args={[0.12, 0.08, 0.01]} />
            <meshStandardMaterial color="#dc2626" />
          </mesh>
          {/* Name tag */}
          <mesh position={[0, -0.1, 0.51]}>
            <boxGeometry args={[0.2, 0.06, 0.01]} />
            <meshStandardMaterial color="#fbbf24" />
          </mesh>
          {/* Shoulder patches */}
          <mesh position={[-0.45, 0.5, 0.12]} rotation={[0, Math.PI / 3, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.01, 16]} />
            <meshStandardMaterial color="#10b981" />
          </mesh>
          <mesh position={[0.45, 0.5, 0.12]} rotation={[0, -Math.PI / 3, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.01, 16]} />
            <meshStandardMaterial color="#8b5cf6" />
          </mesh>
        </>
      )}
    </group>
  );
}

export default function FloatingAstronaut() {
  const { resolvedTheme, setTheme } = useTheme();
  const [showHint, setShowHint] = useState(true);

  const handleClick = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="w-full h-full relative group">
      {/* Subtle tooltip that appears on hover */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-2 pointer-events-none z-10">
        <div
          className={`transition-opacity duration-700 ease-in-out ${
            showHint ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          <p
            className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap backdrop-blur-sm border shadow-sm
              ${resolvedTheme === 'light'
                ? 'bg-black/5 text-black/30 border-black/10'
                : 'bg-white/5 text-white/30 border-white/10'
              }`}
          >
            Click Me!
          </p>
        </div>
      </div>
      
      <Canvas 
        camera={{ position: [0, 0, 3], fov: 50 }} 
        style={{ 
          width: '100%', 
          height: '100%', 
          background: 'transparent',
          minHeight: '60px'
        }} 
        dpr={[1, 2]} 
        gl={{ alpha: true }}
        resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, -5]} intensity={0.7} />
        <AstronautModel onClick={handleClick} theme={resolvedTheme || 'light'} />
      </Canvas>
    </div>
  );
}