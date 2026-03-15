'use client';

import { createContext, useContext, useState, useSyncExternalStore, type ReactNode } from 'react';
import { translations, type Translations } from './i18n';

type Lang = 'en' | 'bg';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getStoredLang(): Lang {
  if (typeof window === 'undefined') return 'bg';
  const stored = localStorage.getItem('sisesthetics-lang');
  return stored === 'en' || stored === 'bg' ? stored : 'bg';
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const storedLang = useSyncExternalStore(subscribe, getStoredLang, () => 'bg' as Lang);
  const [lang, setLangState] = useState<Lang>(storedLang);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('sisesthetics-lang', newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
