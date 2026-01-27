"use client";

import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';
import { translations } from '@/i18n';

type Language = 'fr' | 'en' | 'nl';

const get = (obj: any, path: string): any => path.split('.').reduce((acc, part) => acc && acc[part], obj);

type TranslationFunction = (key: string, options?: { replacements?: Record<string, string | number>; returnObjects?: boolean }) => any;

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationFunction;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');
  
  const t = useCallback<TranslationFunction>((key, options) => {
    const langTranslations = translations[language];
    let translation = get(langTranslations, key);

    if (translation === undefined) {
      console.warn(`Translation not found for key: ${key} in language: ${language}. Falling back to 'en'.`);
      translation = get(translations.en, key);
    }
    
    if (translation === undefined) {
      console.error(`Translation not found for key: ${key} in fallback language 'en'.`);
      return key;
    }

    if (options?.returnObjects) {
      return translation;
    }

    if (typeof translation !== 'string') {
      console.error(`Translation for key: ${key} is not a string. Use returnObjects option if you expect an object or array.`);
      return key;
    }

    if (options?.replacements) {
      Object.keys(options.replacements).forEach((placeholder) => {
        translation = translation.replace(`{${placeholder}}`, String(options.replacements![placeholder]));
      });
    }

    return translation;
  }, [language]);


  const value = useMemo(() => ({
    language,
    setLanguage,
    t,
  }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
