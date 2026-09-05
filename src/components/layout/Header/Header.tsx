import { NavBar } from "../Navbar/NavBar";
import { navLinks } from "../../../data/navLinks";
import { HeaderStyled } from "./Header.Styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <a>Clara Both</a>
      <NavBar links={navLinks} />
    </HeaderStyled>
  );
};
