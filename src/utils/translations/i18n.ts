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
  esTranslationsInvitations, esTranslationsInvitationsAdmin, esTranstationsCreateInvitation, esTranslationsUserUserView, esTranslationsInvitationsList,
  esTranslationsCreateInvitationUU,
} from './languages/es';

import {
  enTranslationsInvitations, enTranslationsInvitationsAdmin, enTranstationsCreateInvitation, enTranslationsUserUserView, enTranslationsInvitationsList,
  enTranslationsCreateInvitationUU,
} from './languages/en';

const languagesInvitations: Record<Languages, Record<string, string>> = {
  es: esTranslationsInvitations,
  en: enTranslationsInvitations,
};

const languagesInvitationsAdmin: Record<Languages, Record<string, string>> = {
  es: esTranslationsInvitationsAdmin,
  en: enTranslationsInvitationsAdmin,
};

const languagesCreateInvitation: Record<Languages, Record<string, string>> = {
  es: esTranstationsCreateInvitation,
  en: enTranstationsCreateInvitation,
};

const languagesUserUserView: Record<Languages, Record<string, string>> = {
  es: esTranslationsUserUserView,
  en: enTranslationsUserUserView,
};

const languagesInvitationsList: Record<Languages, Record<string, string>> = {
  es: esTranslationsInvitationsList,
  en: enTranslationsInvitationsList,
};

const languagesCreateInvitationUU: Record<Languages, Record<string, string>> = {
  es: esTranslationsCreateInvitationUU,
  en: enTranslationsCreateInvitationUU,
};

export const useLanguageInvitations = () => useLanguage(languagesInvitations);
export const useLanguageInvitationsAdmin = () => useLanguage(languagesInvitationsAdmin);
export const useLanguageCreateInvitation = () => useLanguage(languagesCreateInvitation);
export const useLanguageUserUserView = () => useLanguage(languagesUserUserView);
export const useLanguageInvitationsList = () => useLanguage(languagesInvitationsList);
export const useLanguageCreateInvitationUU = () => useLanguage(languagesCreateInvitationUU);