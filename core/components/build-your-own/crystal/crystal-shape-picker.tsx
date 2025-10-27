import React from 'react';

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

const crystalShapes = [
  { value: 'sphere', label: 'Sphere' },
  { value: 'cube', label: 'Cube' },
  { value: 'octahedron', label: 'Octahedron' },
  { value: 'dodecahedron', label: 'Dodecahedron' },
  { value: 'icosahedron', label: 'Icosahedron' },
  { value: 'tetrahedron', label: 'Pyramid (Tetrahedron)' },
  { value: 'triangularPrism', label: 'Triangular Prism' },
  { value: 'hexagonalPrism', label: 'Hexagonal Prism' },
  { value: 'obelisk', label: 'Obelisk' },
  { value: 'spire', label: 'Spire / Shard' },
];

interface CrystalShapePickerProps {
  shape: CrystalShape;
  onChange: (shape: CrystalShape) => void;
}

export default function CrystalShapePicker({ shape, onChange }: CrystalShapePickerProps) {
  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      {crystalShapes.map(s => (
        <button
          key={s.value}
          onClick={() => onChange(s.value as CrystalShape)}
          style={{
            padding: '8px 16px',
            borderRadius: 6,
            border: shape === s.value ? '2px solid #aeef33' : '1px solid #ccc',
            background: shape === s.value ? '#f7ffe6' : '#fff',
            fontWeight: shape === s.value ? 'bold' : 'normal',
            cursor: 'pointer',
            transition: 'border 0.2s, background 0.2s',
          }}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}