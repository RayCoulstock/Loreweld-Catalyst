import React from 'react';

interface CrystalGradientPickerProps {
  color1: string;
  color2: string;
  onChange: (color1: string, color2: string) => void;
}

export default function CrystalGradientPicker({
  color1,
  color2,
  onChange,
}: CrystalGradientPickerProps) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }} className='justify-center'>
      <label>
        Color 1:&nbsp;
        <input
          type="color"
          value={color1}
          onChange={e => onChange(e.target.value, color2)}
        />
      </label>
      <label>
        Color 2:&nbsp;
        <input
          type="color"
          value={color2}
          onChange={e => onChange(color1, e.target.value)}
        />
      </label>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          background: `linear-gradient(to bottom, ${color1}, ${color2})`,
          border: '1px solid #ccc',
        }}
        title="Gradient preview"
      />
    </div>
  );
}