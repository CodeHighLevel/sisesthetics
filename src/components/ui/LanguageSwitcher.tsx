'use client';

import { useTranslation } from '@/lib/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();

  return (
    <div className="flex items-center gap-1 text-[10px] tracking-[0.15em] font-medium">
      <button
        onClick={() => setLang('bg')}
        className={`px-2.5 py-1.5 transition-all duration-300 ${
          lang === 'bg'
            ? 'text-accent-gold'
            : 'text-neutral-400 hover:text-neutral-600'
        }`}
      >
        BG
      </button>
      <span className="text-neutral-300">/</span>
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1.5 transition-all duration-300 ${
          lang === 'en'
            ? 'text-accent-gold'
            : 'text-neutral-400 hover:text-neutral-600'
        }`}
      >
        EN
      </button>
    </div>
  );
}
