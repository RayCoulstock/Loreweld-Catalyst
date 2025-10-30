import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { getFormatter, setRequestLocale } from 'next-intl/server';
import { ProductCard } from '@/vibes/soul/primitives/product-card';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';
import { productCardTransformer } from '~/data-transformers/product-card-transformer';
import { getDragonPageData } from './page-data';

interface Props {
  params: Promise<{ locale: string}>;
}

export default async function BuildYourOwnCrystal({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const format = await getFormatter();
  const dragonData = await getDragonPageData();
  const dragonProducts = dragonData?.products
    ? removeEdgesAndNodes(dragonData.products)
    : [];
  const dragons = productCardTransformer(dragonProducts, format);

  return (
    <SectionLayout className="heading-layout">
      <h1 className="font-[family-name:var(--runestone-relics-brand-font)]
        text-3xl font-medium leading-none pb-5 @lg:text-4xl @2xl:text-5xl">Here be Dragons</h1>

      <ul className="grid list-none gap-6 p-0 @lg:grid-cols-2 @2xl:grid-cols-3">
        {dragons.map((dragon) => (
          <li key={dragon.id}>
            <ProductCard aspectRatio="3:4" product={dragon} />
          </li>
        ))}
        {dragons.length === 0 && (
          <li className="text-sm text-[color:var(--runestone-relics-text-muted)]">
            No dragons found.
          </li>
        )}
      </ul>
    </SectionLayout>
  );
}
