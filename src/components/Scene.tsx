'use client';

import { Canvas } from '@react-three/fiber';
import FloatingShapes from './FloatingShapes';
import GlowingOrbs from './GlowingOrbs';
import LightParticles from './LightParticles';
import Stars from './Stars';
import { useTheme } from 'next-themes';
export default function Scene() {
  const { resolvedTheme } = useTheme();
  
  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ 
          alpha: true,
          antialias: true
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0); // Transparent
        }}
      >
        <ambientLight intensity={resolvedTheme === 'dark' ? 0.5 : 1.0} />
        <pointLight position={[10, 10, 10]} intensity={resolvedTheme === 'dark' ? 1 : 1.2} />
        <pointLight position={[-10, -10, -10]} intensity={resolvedTheme === 'dark' ? 0.5 : 0.6} />
        
        {/* Dark theme elements */}
        {resolvedTheme === 'dark' && (
          <>
            {/* <FloatingShapes />  */}
            <Stars />
          </>
        )}
        
        {/* Light theme elements */}
        {resolvedTheme === 'light' && (
          <>
            <FloatingShapes />
            <GlowingOrbs />
            <LightParticles />
          </>
        )}
      </Canvas>
    </div>
  );
}

// Alternative: Try removing the Scene component entirely and just use the astronaut
// In your Home component, remove <Scene /> and see if the background works properly