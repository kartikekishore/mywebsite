'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Stars() {
  const starsRef = useRef<THREE.Points>(null);
  const count = 5000;

  // Create star vertices
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;     // x
    positions[i + 1] = (Math.random() - 0.5) * 10; // y
    positions[i + 2] = (Math.random() - 0.5) * 10; // z
  }

  // Animate stars
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0002;
      starsRef.current.rotation.x += 0.0001;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 0]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        sizeAttenuation={true}
        color="white"
        transparent
        opacity={0.8}
      />
    </points>
  );
} 

