import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageTitle from '@/components/PageTitle';

type Props = {
  params: Promise<{locale: string}>;
};

export default function About({params}: Props) {
  const {locale} = use(params);

  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('About');
  return <PageTitle>{t('title')}</PageTitle>;
}
