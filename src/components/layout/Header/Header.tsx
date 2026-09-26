import { NavBar } from "../NavBar/NavBar";
import { navLinks } from "../../../data/navLinks";
import { HeaderStyled } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <a>Clara Both</a>
      <NavBar links={navLinks} />
    </HeaderStyled>
  );
};
