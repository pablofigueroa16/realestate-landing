import { useI18n } from '../context/I18nContext';

export const useTranslation = () => {
  const { t, locale, setLocale } = useI18n();
  return { t, locale, setLocale };
};
