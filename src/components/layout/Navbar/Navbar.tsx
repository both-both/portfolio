import { NavBarStyled } from "./NavBar.Styled";
import type { NavBarProps } from "./NavBar.types";

export const NavBar = ({ links }: NavBarProps) => {
  return (
    <NavBarStyled>
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </NavBarStyled>
  );
};
