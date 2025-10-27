import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { getFormatter, getTranslations, setRequestLocale } from 'next-intl/server';

import BuildYourOwn from '~/components/build-your-own'; // <-- Add this import

interface Props {
  params: Promise<{ locale: string, ref: string }>;
}

export default async function Home({ params }: Props) {
  const { locale, ref } = await params;

  setRequestLocale(locale);

  const referrer = ref;

  const t = await getTranslations('Home');
  const format = await getFormatter();

  
  return (
    <>
      <BuildYourOwn referrer={referrer}  /> {/* <-- Add this component here */}
    </>
  );
}
