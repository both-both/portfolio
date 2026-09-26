import { useLanguage } from "../../../context/LanguageContext";
import { NavBarStyled } from "./NavBar.styled";
import type { NavBarProps } from "./NavBar.types";

export const NavBar = ({ links }: NavBarProps) => {
  const { t, lang, setLang } = useLanguage();

  return (
    <NavBarStyled>
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {t.nav[link.key]}
        </a>
      ))}
      <button onClick={() => setLang(lang === "da" ? "en" : "da")}>
        {lang === "da" ? "EN" : "DA"}
      </button>
    </NavBarStyled>
  );
};
