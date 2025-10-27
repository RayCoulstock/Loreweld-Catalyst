'use client';

import { useState } from 'react';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';
import Crystal from './crystal/crystal';
import CrystalShapePicker from './crystal/crystal-shape-picker';
import CrystalGradientPicker from './crystal/crystal-gradient-picker';
import CrystalMaterialControls from './crystal/crystal-material-controls';

export default function BuildYourOwn() {
  const [shape, setShape] = useState('octahedron');
  const [color1, setColor1] = useState('#00f');
  const [color2, setColor2] = useState('#0f0');
  const [material, setMaterial] = useState({
    opacity: 0.1,
    roughness: 0,
    metalness: 0,
    transmission: 1,
    thickness: 0.5,
    ior: 1.5,
    clearcoat: 1,
    clearcoatRoughness: 0,
    transparent: false,
  });

  return (
    <SectionLayout className="border rounded-lg">
      <h1>Build Your Own Crystal</h1>
      <CrystalShapePicker shape={shape as any} onChange={setShape} />
      <CrystalGradientPicker
        color1={color1}
        color2={color2}
        onChange={(c1, c2) => {
          setColor1(c1);
          setColor2(c2);
        }}
      />
      <CrystalMaterialControls {...material} onChange={setMaterial} />
      <Crystal
        shape={shape as any}
        color1={color1}
        color2={color2}
        {...material}
      />
    </SectionLayout>
  );
}