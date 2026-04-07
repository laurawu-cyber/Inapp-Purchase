import { createContext, useContext, useState, ReactNode } from 'react';
import { Lang, translations } from './translations';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof translations['en'], vars?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    return (localStorage.getItem('demo_lang') as Lang) ?? 'en';
  });

  const setLang = (l: Lang) => {
    localStorage.setItem('demo_lang', l);
    setLangState(l);
  };

  const t = (key: keyof typeof translations['en'], vars?: Record<string, string | number>): string => {
    let str = translations[lang][key] ?? translations['en'][key] ?? key;
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      });
    }
    return str;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
