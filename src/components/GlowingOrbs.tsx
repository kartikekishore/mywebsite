
'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Soft glowing orbs for light theme
export default function GlowingOrbs() {
    const orbsRef = useRef<THREE.Group>(null);
    
    const orbs = useMemo(() => {
      const temp = [];
      for (let i = 0; i < 12; i++) {
        temp.push({
          position: [
            (Math.random() - 0.5) * 25,
            (Math.random() - 0.5) * 25,
            (Math.random() - 0.5) * 25
          ] as [number, number, number],
          scale: Math.random() * 0.3 + 0.15,
          speed: Math.random() * 0.4 + 0.05,
          color: new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.6, 0.7)
        });
      }
      return temp;
    }, []);
  
    useFrame(({ clock }) => {
      if (orbsRef.current) {
        orbsRef.current.children.forEach((child, i) => {
          const orb = orbs[i];
          const time = clock.elapsedTime;
          child.position.y = orb.position[1] + Math.sin(time * orb.speed) * 1.5;
          child.position.x = orb.position[0] + Math.cos(time * orb.speed * 0.7) * 1;
          
          const pulse = 1 + Math.sin(time * orb.speed * 2) * 0.15;
          child.scale.setScalar(orb.scale * pulse);
        });
      }
    });
  
    return (
      <group ref={orbsRef}>
        {orbs.map((orb, i) => (
          <mesh key={i} position={orb.position}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial 
              color={orb.color}
              transparent 
              opacity={0.5}
              emissive={orb.color}
              emissiveIntensity={0.3}
            />
          </mesh>
        ))}
      </group>
    );
  }