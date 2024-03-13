import { useEffect, useState } from 'react';

type Languages = 'es' | 'en';

// let currentLanguage: Languages = 'es';

let currentLanguage: Languages = (localStorage.getItem('language') as Languages) || 'es';

const useLanguage = (translations: Record<Languages, Record<string, string>>) => {
  const [language, setLanguageState] = useState<Languages>(currentLanguage);

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, []);

  const setLanguage = (lang: Languages) => {
    localStorage.removeItem('language');

    if (translations[lang]) {
      currentLanguage = lang;
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string) => {
    return translations[currentLanguage][key] || key;
  };

  return { language, setLanguage, t };
};

export { useLanguage };

import {
  esTranslationsInvitations,
} from './languages/es';

import {
  enTranslationsInvitations,
} from './languages/en';

const languagesInvitations: Record<Languages, Record<string, string>> = {
  es: esTranslationsInvitations,
  en: enTranslationsInvitations,
};


export const useLanguageUsers = () => useLanguage(languagesInvitations);