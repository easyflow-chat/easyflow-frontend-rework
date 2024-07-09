import TranslationsProvider from '@/src/components/translation-provider/TranslationsProvider';
import initTranslations from '@i18n';
import { FunctionComponent } from 'react';

interface HomeProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = ['login'];

const Home: FunctionComponent<HomeProps> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <h1>{t('login:login')}</h1>
    </TranslationsProvider>
  );
};

export default Home;