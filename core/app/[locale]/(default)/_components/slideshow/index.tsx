import { useTranslations } from 'next-intl';

import { Slideshow as SlideshowSection } from '~/vibes/soul/sections/slideshow';

import SlideBg01 from './slide-bg-01.jpg';
import SlideBg02 from './slide-bg-02.jpg';
import SlideBg03 from './slide-bg-03.jpg';
import SlideBg04 from './Loreweld-vault-staffs.png';
import SlideBg05 from './Loreweld-vault-jewellery.png';

export function Slideshow() {
  const t = useTranslations('Home.Slideshow');

  const slides = [
    {
      title: t('Slide04.title'),
      image: {
        src: SlideBg04.src,
        alt: t('Slide04.alt'),
        blurDataUrl: SlideBg04.blurDataURL,
      },
      description: t('Slide04.description'),
      cta: {
        href: '/shop-all',
        label: t('Slide04.cta'),
      },
    },
    {
      title: t('Slide05.title'),
      image: {
        src: SlideBg05.src,
        alt: t('Slide05.alt'),
        blurDataUrl: SlideBg05.blurDataURL,
      },
      description: t('Slide05.description'),
      cta: {
        href: '/shop-all',
        label: t('Slide05.cta'),
      },
    },
  ];

  return <SlideshowSection slides={slides} />;
}
