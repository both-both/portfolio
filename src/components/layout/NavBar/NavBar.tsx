import { useLanguage } from "../../../hooks/useLanguage";
import { Button } from "../../Button/Button";
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
      <Button
        type="button"
        onClick={() => setLang(lang === "da" ? "en" : "da")}
        ariaLabel={lang === "da" ? "Switch to English" : "Skift til dansk"}
      >
        {lang === "da" ? "EN" : "DA"}
      </Button>
    </NavBarStyled>
  );
};
