import { createContext } from "react";
import type { Translations } from "../i18n/da";

export type Lang = "da" | "en";

export const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
} | null>(null);
