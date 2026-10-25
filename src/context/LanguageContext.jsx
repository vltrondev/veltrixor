import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('synapcraft_lang');
      return saved === 'en' ? 'en' : 'es'; // 'es' is primary and default
    } catch {
      return 'es';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('synapcraft_lang', language);
      document.documentElement.lang = language;
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'es' ? 'en' : 'es'));
  };

  const setLanguage = (lang) => {
    if (lang === 'es' || lang === 'en') {
      setLanguageState(lang);
    }
  };

  // Helper function to get translation by dot notation (e.g. "hero.titleLine1")
  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to Spanish if missing in current
        let fallback = translations.es;
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey];
          } else {
            return path; // Return key if not found
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t, isSpanish: language === 'es' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
