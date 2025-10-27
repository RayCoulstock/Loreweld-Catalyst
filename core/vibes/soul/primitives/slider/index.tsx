'use client';

import { useState } from 'react';

interface SliderProps {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
}

export default function Slider({
  min = 1,
  max = 100,
  value,
  onChange,
  className = '',
}: SliderProps) {
  const [internalValue, setInternalValue] = useState(value ?? 50);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={`slidecontainer ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        value={value ?? internalValue}
        onChange={handleChange}
        className="slider"
      />
    </div>
  );
}