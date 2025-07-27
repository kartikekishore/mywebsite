'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Define a type for our floating objects for better type safety
type ObjectData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
  type: number;
};

// Create a reusable vector once to avoid creating it in every frame
const directionVector = new THREE.Vector3();

export default function FloatingShapes() {
    const shapesRef = useRef<THREE.Group>(null);
    
    const shapes = useMemo(() => {
      // Apply the ObjectData type to the array
      const temp: ObjectData[] = [];
      for (let i = 0; i < 12; i++) {
        temp.push({
          position: [
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
          ],
          rotation: [
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          ],
          scale: Math.random() * 0.08 + 0.04,
          speed: (Math.random() * 0.015 + 0.008) * 0.7,
          type: Math.floor(Math.random() * 3)
        });
      }
      return temp;
    }, []);

    const junks = useMemo(() => {
      // Apply the ObjectData type to the array
      const debris: ObjectData[] = [];
      for (let i = 0; i < 5; i++) {
        debris.push({
          position: [
            (Math.random() - 0.5) * 22,
            (Math.random() - 0.5) * 22,
            (Math.random() - 0.5) * 22
          ],
          rotation: [
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          ],
          scale: Math.random() * 0.06 + 0.03,
          speed: (Math.random() * 0.02 + 0.01) * 0.7,
          type: Math.floor(Math.random() * 4)
        });
      }
      return debris;
    }, []);

    const spaceships = useMemo(() => {
      // Apply the ObjectData type to the array
      const ships: ObjectData[] = [];
      for (let i = 0; i < 5; i++) {
        ships.push({
          position: [(Math.random() - 0.5) * 18, (Math.random() - 0.5) * 18, (Math.random() - 0.5) * 18],
          rotation: [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2],
          scale: (0.18 + Math.random() * 0.06) * 2.5,
          speed: (0.012 + Math.random() * 0.01) * 0.7,
          type: i % 2
        });
      }
      return ships;
    }, []);

    useFrame(({ clock }) => {
      if (shapesRef.current) {
        shapesRef.current.children.forEach((child, i) => {
          if (i < shapes.length) {
            const shape = shapes[i];
            child.rotation.x += shape.speed;
            child.rotation.y += shape.speed * 0.7;
            child.position.y += Math.sin(clock.elapsedTime * shape.speed * 50) * 0.001;
            child.position.x += Math.cos(clock.elapsedTime * shape.speed * 30) * 0.001;
          } else if (i < shapes.length + junks.length) {
            const junk = junks[i - shapes.length];
            child.rotation.x += junk.speed * 1.2;
            child.rotation.y += junk.speed * 0.9;
            child.position.y += Math.sin(clock.elapsedTime * junk.speed * 60) * 0.0012;
            child.position.x += Math.cos(clock.elapsedTime * junk.speed * 40) * 0.0012;
          } else {
            const ship = spaceships[i - shapes.length - junks.length];
            
            if (ship.type === 0) { // Rocket logic
              directionVector.set(0, 1, 0);
              directionVector.applyQuaternion(child.quaternion);
              const moveSpeed = ship.speed * 0.15;
              child.position.addScaledVector(directionVector, moveSpeed);

              if (child.position.length() > 25) {
                child.position.negate();
              }
            } else { // Saucer logic
              child.rotation.y += ship.speed * 0.7;
              child.position.x += Math.sin(clock.elapsedTime * ship.speed * 10) * 0.002;
              child.position.z += Math.cos(clock.elapsedTime * ship.speed * 8) * 0.002;
            }
          }
        });
      }
    });

    return (
      <group ref={shapesRef}>
        {shapes.map((shape, i) => (
          <mesh
            key={"shape-" + i}
            position={shape.position}
            rotation={shape.rotation}
            scale={shape.scale}
          >
            {shape.type === 0 && <boxGeometry args={[1, 1, 1]} />}
            {shape.type === 1 && <sphereGeometry args={[0.5, 8, 8]} />}
            {shape.type === 2 && <torusGeometry args={[0.3, 0.1, 8, 16]} />}
            <meshStandardMaterial
              color="#4299e1"
              transparent
              opacity={0.4}
              wireframe
            />
          </mesh>
        ))}
        {junks.map((junk, i) => (
          <mesh
            key={"junk-" + i}
            position={junk.position}
            rotation={junk.rotation}
            scale={junk.scale}
          >
            {junk.type === 0 && <boxGeometry args={[1.2, 0.08, 0.6]} />}
            {junk.type === 1 && <cylinderGeometry args={[0.08, 0.08, 0.8, 12]} />}
            {junk.type === 2 && <octahedronGeometry args={[0.3, 0]} />}
            {junk.type === 3 && <torusGeometry args={[0.18, 0.04, 8, 16]} />}
            <meshStandardMaterial
              color="#64748b"
              metalness={0.5}
              roughness={0.3}
              transparent
              opacity={0.7}
            />
          </mesh>
        ))}
        {spaceships.map((ship, i) => (
          <group
            key={"ship-" + i}
            position={ship.position}
            rotation={ship.rotation}
            scale={ship.scale}
          >
            {ship.type === 0 ? (
              // Rocket model
              <>
                <mesh>
                  <cylinderGeometry args={[0.12, 0.12, 0.7, 16]} />
                  <meshStandardMaterial color="#fbbf24" metalness={0.7} roughness={0.2} side={THREE.DoubleSide} />
                </mesh>
                <mesh position={[0, 0.4, 0]}>
                  <coneGeometry args={[0.12, 0.22, 16]} />
                  <meshStandardMaterial color="#f87171" metalness={0.6} roughness={0.3} side={THREE.DoubleSide} />
                </mesh>
                <mesh position={[-0.13, -0.3, 0]} rotation={[0, 0, Math.PI / 6]}>
                  <boxGeometry args={[0.04, 0.18, 0.02]} />
                  <meshStandardMaterial color="#60a5fa" side={THREE.DoubleSide} />
                </mesh>
                <mesh position={[0.13, -0.3, 0]} rotation={[0, 0, -Math.PI / 6]}>
                  <boxGeometry args={[0.04, 0.18, 0.02]} />
                  <meshStandardMaterial color="#60a5fa" side={THREE.DoubleSide} />
                </mesh>
                <mesh position={[0, 0.1, 0.13]}>
                  <sphereGeometry args={[0.06, 12, 12]} />
                  <meshStandardMaterial color="#f9fafb" side={THREE.DoubleSide} />
                </mesh>
                <mesh position={[0, -0.45, 0]}>
                  <coneGeometry args={[0.08, 0.2, 12]} />
                  <meshStandardMaterial color="#fca5a5" emissive="#ef4444" emissiveIntensity={0.8} side={THREE.DoubleSide} />
                </mesh>
              </>
            ) : (
              // Saucer model
              <>
                <mesh>
                  <torusGeometry args={[0.18, 0.07, 16, 32]} />
                  <meshStandardMaterial color="#a3e635" metalness={0.8} roughness={0.2} />
                </mesh>
                <mesh position={[0, 0.08, 0]}>
                  <sphereGeometry args={[0.09, 16, 16]} />
                  <meshStandardMaterial color="#f9fafb" />
                </mesh>
                <mesh position={[0.13, -0.04, 0]}>
                  <sphereGeometry args={[0.025, 8, 8]} />
                  <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.7} />
                </mesh>
                <mesh position={[-0.13, -0.04, 0]}>
                  <sphereGeometry args={[0.025, 8, 8]} />
                  <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.7} />
                </mesh>
              </>
            )}
          </group>
        ))}
      </group>
    );
  }