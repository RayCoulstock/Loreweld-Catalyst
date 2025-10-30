'use client';

import { useState } from 'react';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';
import { useLocale, useTranslations } from 'next-intl';
import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import Crystal from './crystal/crystal';
import CrystalShapePicker from './crystal/crystal-shape-picker';
import CrystalGradientPicker from './crystal/crystal-gradient-picker';
import CrystalMaterialControls from './crystal/crystal-material-controls';

type BuildYourOwnProps = {
  defaultShape: Streamable<string | null>;
};

export default function BuildYourOwn({ defaultShape = 'null' }: BuildYourOwnProps) {
  return (
    <Stream value={defaultShape} fallback={"sphere"}>
      {(resolvedShape) => {
        const [shape, setShape] = useState(resolvedShape ?? 'null');
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

  const t = useTranslations('BuildYourOwnCrystal.Component');

  return (
    <SectionLayout className="border-2 border-[var(--runestone-relics-brand-primary)] shadow-lg shadow-[var(--runestone-relics-brand-accent)]
                              rounded-lg text-center text-[var(--runestone-relics-brand-primary)]">
      <h1 className="font-[family-name:var(--runestone-relics-brand-font)]
        text-3xl font-medium leading-none pb-5 @lg:text-4xl @2xl:text-5xl">
          {t('Heading')}
      </h1>
     
      {defaultShape === 'null' && (
        <CrystalShapePicker shape={shape as any} onChange={setShape} />
      )}

      <CrystalGradientPicker
        color1={color1}
        color2={color2}
        onChange={(c1, c2) => {
          setColor1(c1);
          setColor2(c2);
        }}
      />
  
      <Crystal
        shape={shape as any}
        color1={color1}
        color2={color2}
        {...material}
      />
    </SectionLayout>
    );
      }}
    </Stream>
  );
}