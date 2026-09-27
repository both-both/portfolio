import { useEffect, useState, type ReactNode } from "react";
import { da } from "../i18n/da";
import { en } from "../i18n/en";
import { LanguageContext, type Lang } from "./LanguageContext";

const dictionaries = { da, en };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem("lang") as Lang) ?? "da",
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const changeLang = (l: Lang) => {
    localStorage.setItem("lang", l);
    setLang(l);
  };

  return (
    <LanguageContext
      value={{ lang, setLang: changeLang, t: dictionaries[lang] }}
    >
      {children}
    </LanguageContext>
  );
};
