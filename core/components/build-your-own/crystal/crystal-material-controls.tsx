import React from 'react';

interface CrystalMaterialControlsProps {
  opacity: number;
  roughness: number;
  metalness: number;
  transmission: number;
  thickness: number;
  ior: number;
  clearcoat: number;
  clearcoatRoughness: number;
  transparent: boolean;
  onChange: (values: {
    opacity: number;
    roughness: number;
    metalness: number;
    transmission: number;
    thickness: number;
    ior: number;
    clearcoat: number;
    clearcoatRoughness: number;
    transparent: boolean;
  }) => void;
}

export default function CrystalMaterialControls(props: CrystalMaterialControlsProps) {
  const handleChange = (key: keyof CrystalMaterialControlsProps, value: any) => {
    props.onChange({ ...props, [key]: value });
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
      <label>
        Opacity
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={props.opacity}
          onChange={e => handleChange('opacity', parseFloat(e.target.value))}
        />
        {props.opacity}
      </label>
      <label>
        Transparent
        <input
          type="checkbox"
          checked={props.transparent}
          onChange={e => handleChange('transparent', e.target.checked)}
        />
      </label>
      <label>
        Roughness
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={props.roughness}
          onChange={e => handleChange('roughness', parseFloat(e.target.value))}
        />
        {props.roughness}
      </label>
      <label>
        Metalness
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={props.metalness}
          onChange={e => handleChange('metalness', parseFloat(e.target.value))}
        />
        {props.metalness}
      </label>
      <label>
        Transmission
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={props.transmission}
          onChange={e => handleChange('transmission', parseFloat(e.target.value))}
        />
        {props.transmission}
      </label>
      <label>
        Thickness
        <input
          type="range"
          min={0}
          max={5}
          step={0.01}
          value={props.thickness}
          onChange={e => handleChange('thickness', parseFloat(e.target.value))}
        />
        {props.thickness}
      </label>
      <label>
        IOR
        <input
          type="range"
          min={1}
          max={2.5}
          step={0.01}
          value={props.ior}
          onChange={e => handleChange('ior', parseFloat(e.target.value))}
        />
        {props.ior}
      </label>
      <label>
        Clearcoat
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={props.clearcoat}
          onChange={e => handleChange('clearcoat', parseFloat(e.target.value))}
        />
        {props.clearcoat}
      </label>
      <label>
        Clearcoat Roughness
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={props.clearcoatRoughness}
          onChange={e => handleChange('clearcoatRoughness', parseFloat(e.target.value))}
        />
        {props.clearcoatRoughness}
      </label>
    </div>
  );
}