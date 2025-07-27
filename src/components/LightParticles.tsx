 
'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
  
// Subtle floating particles
export default function LightParticles() {
    const particlesRef = useRef<THREE.Group>(null);
    
    const particles = useMemo(() => {
      const temp = [];
      for (let i = 0; i < 600; i++) {
        temp.push({
          position: [
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30
          ] as [number, number, number],
          speed: Math.random() * 0.008 + 0.004
        });
      }
      return temp;
    }, []);
  
    useFrame(({ clock }) => {
      if (particlesRef.current) {
        particlesRef.current.children.forEach((child, i) => {
          const particle = particles[i];
          child.position.y += particle.speed;
          if (child.position.y > 15) {
            child.position.y = -15;
          }
          
          child.position.x += Math.sin(clock.elapsedTime + i) * 0.0008;
          child.position.z += Math.cos(clock.elapsedTime + i) * 0.0008;
        });
      }
    });
  
    return (
      <group ref={particlesRef}>
        {particles.map((particle, i) => (
          <mesh key={i} position={particle.position}>
            <sphereGeometry args={[0.015, 4, 4]} />
            <meshStandardMaterial 
              color="#4a90e2"
              transparent 
              opacity={0.7}
            />
          </mesh>
        ))}
      </group>
    );
  }