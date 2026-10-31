import { createContext, useContext, useEffect, useState } from 'react';
import ui from '../data/ui.json';

const Ctx = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'ru');
  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'ru' ? 'ru' : 'hy';
  }, [lang]);
  return (
    <Ctx.Provider value={{ lang, setLang, u: ui[lang], kinds: ui.kinds[lang] }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLang = () => useContext(Ctx);
