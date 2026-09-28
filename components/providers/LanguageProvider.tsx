'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLang, TRANSLATIONS, TranslationDictionary } from '@/lib/i18n/translations';

interface LanguageContextType {
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
  t: TranslationDictionary;
  langList: { code: SupportedLang; label: string; native: string }[];
  currentLangLabel: string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const LANG_OPTIONS: { code: SupportedLang; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'zh', label: 'Chinese', native: '简体中文' },
  { code: 'de', label: 'German', native: 'Deutsch' },
  { code: 'fr', label: 'French', native: 'Français' },
  { code: 'es', label: 'Spanish', native: 'Español' },
  { code: 'ar', label: 'Arabic', native: 'العربية' },
];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<SupportedLang>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('china_ai_tour_lang') as SupportedLang;
      if (saved && TRANSLATIONS[saved]) {
        setLangState(saved);
        if (saved === 'ar') {
          document.documentElement.setAttribute('dir', 'rtl');
        } else {
          document.documentElement.setAttribute('dir', 'ltr');
        }
      }
    } catch (e) {}
  }, []);

  const setLang = (newLang: SupportedLang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('china_ai_tour_lang', newLang);
      if (newLang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
      }
    } catch (e) {}
  };

  const currentOption = LANG_OPTIONS.find((o) => o.code === lang) || LANG_OPTIONS[0];

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: TRANSLATIONS[lang] || TRANSLATIONS.en,
        langList: LANG_OPTIONS,
        currentLangLabel: currentOption.native,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      lang: 'en' as SupportedLang,
      setLang: () => {},
      t: TRANSLATIONS.en,
      langList: LANG_OPTIONS,
      currentLangLabel: 'English',
    };
  }
  return ctx;
}
