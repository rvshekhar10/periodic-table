import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Electron = ({ radius, speed, phaseOffset = 0 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * speed + phaseOffset;
      // Simple circular orbit in the local coordinate system of the tilted shell
      meshRef.current.position.x = Math.cos(time) * radius;
      meshRef.current.position.z = Math.sin(time) * radius;
      meshRef.current.position.y = 0; // Keep electrons in the orbital plane
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.08]} castShadow>
      <meshStandardMaterial
        color="#00ffff"
        emissive="#0080ff"
        emissiveIntensity={0.3}
        metalness={0.1}
        roughness={0.2}
      />
    </Sphere>
  );
};

const BohrModel3D = ({ element }) => {
  const shells = element.shells || [];

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }} shadows>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b35" />

      {/* Nucleus */}
      <Sphere args={[0.5]} position={[0, 0, 0]} castShadow receiveShadow>
        <meshStandardMaterial
          color="#ff6b35"
          emissive="#ff4500"
          emissiveIntensity={0.1}
          metalness={0.3}
          roughness={0.4}
        />
      </Sphere>

      {/* Electron shells and electrons */}
      {shells.map((electronsInShell, shellIndex) => {
        const radius = (shellIndex + 1) * 2;
        const inclination = shellIndex * 0.3;
        return (
          <group key={shellIndex} rotation={[inclination, 0, 0]}>
            {/* Shell ring - make it more 3D with torus geometry */}
            <mesh rotation={[Math.PI / 2, 0, 0]} receiveShadow>
              <torusGeometry args={[radius, 0.02, 8, 64]} />
              <meshStandardMaterial
                color="#ffffff"
                transparent
                opacity={0.2}
                emissive="#444444"
                emissiveIntensity={0.05}
              />
            </mesh>

            {/* Electrons */}
            {Array.from({ length: electronsInShell }, (_, electronIndex) => {
              // Calculate phase offset to evenly distribute electrons around the orbit
              const phaseOffset = (2 * Math.PI * electronIndex) / electronsInShell;
              // All electrons in the same shell move at the same speed to prevent overlap
              const baseSpeed = 0.5 + shellIndex * 0.2; // Different shells have different speeds
              return (
                <Electron
                  key={electronIndex}
                  radius={radius}
                  speed={baseSpeed}
                  phaseOffset={phaseOffset}
                />
              );
            })}
          </group>
        );
      })}

      {/* Background elements for depth */}
      <mesh position={[0, 0, -20]}>
        <sphereGeometry args={[15, 32, 32]} />
        <meshBasicMaterial color="#000011" side={2} />
      </mesh>

      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={20}
      />
    </Canvas>
  );
};

export default BohrModel3D;