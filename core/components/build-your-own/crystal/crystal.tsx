'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useMemo } from 'react';
import * as THREE from 'three';

type CrystalShape =
  | 'sphere'
  | 'cube'
  | 'octahedron'
  | 'dodecahedron'
  | 'icosahedron'
  | 'tetrahedron'
  | 'triangularPrism'
  | 'hexagonalPrism'
  | 'obelisk'
  | 'spire';


interface CrystalProps {
  shape?: CrystalShape;
  color1?: string;
  color2?: string;
  opacity?: number;
  roughness?: number;
  metalness?: number;
  transmission?: number;
  thickness?: number;
  ior?: number;
  clearcoat?: number;
  clearcoatRoughness?: number;
  transparent?: boolean;
}

function useGradientTexture(color1: string, color2: string) {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 256);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, [color1, color2]);
}

function CrystalMesh({
  shape = 'octahedron',
  color1 = '#00f',
  color2 = '#0f0',
  opacity = 0.7,
  roughness = 0,
  metalness = 0.1,
  transmission = 1,
  thickness = 0.5,
  ior = 1.5,
  clearcoat = 1,
  clearcoatRoughness = 0,
  transparent = false,
}: CrystalProps) {
  const gradientTexture = useGradientTexture(color1, color2);


  let geometry;
  switch (shape) {
    case 'sphere':
      geometry = <sphereGeometry args={[1, 32, 32]} />;
      break;
    case 'cube':
      geometry = <boxGeometry args={[1, 1, 1]} />;
      break;
    case 'octahedron':
      geometry = <octahedronGeometry args={[1, 0]} />;
      break;
    case 'dodecahedron':
      geometry = <dodecahedronGeometry args={[1, 0]} />;
      break;
    case 'icosahedron':
      geometry = <icosahedronGeometry args={[1, 0]} />;
      break;
    case 'tetrahedron':
      geometry = <tetrahedronGeometry args={[1, 0]} />;
      break;
    case 'triangularPrism':
      geometry = (
        // Custom geometry for triangular prism
        <cylinderGeometry args={[1, 1, 2, 3]} />
      );
      break;
    case 'hexagonalPrism':
      geometry = (
        <cylinderGeometry args={[1, 1, 2, 6]} />
      );
      break;
    case 'obelisk':
      geometry = <boxGeometry args={[0.7, 2, 0.7]} />;
      break;
    case 'spire':
      geometry = <coneGeometry args={[0.7, 2, 4]} />;
      break;
    default:
      geometry = <octahedronGeometry args={[1, 0]} />;
  }

  return (
    <mesh>
      {geometry}
      <meshPhysicalMaterial
        map={gradientTexture}
        transparent={transparent}
        opacity={opacity}
        roughness={roughness}
        metalness={metalness}
        transmission={transmission}
        thickness={thickness}
        ior={ior}
        clearcoat={clearcoat}
        clearcoatRoughness={clearcoatRoughness}
        attenuationColor="#99ddff"
        attenuationDistance={1.2}
      />
    </mesh>
  );
}

export default function Crystal({ shape = 'octahedron', color1 = '#00f', color2 = '#0f0' }: CrystalProps) {
  return (
    <div style={{ width: 300, height: 300 }} className="mx-auto">
      <Canvas
        camera={{ position: [2, 2, 2], fov: 50 }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.0;
          gl.outputColorSpace = THREE.SRGBColorSpace
        }}
      >
        <group>
          <Environment preset="studio" />
        <pointLight position={[10, 10, 10]} />
        <CrystalMesh shape={shape} color1={color1} color2={color2} />
        <OrbitControls enablePan={false} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[5,5,5]} intensity={2} castShadow />
      </group>

      </Canvas>
    </div>
  );
}