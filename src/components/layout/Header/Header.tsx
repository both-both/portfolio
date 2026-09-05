import { NavBar } from "../Navbar/Navbar";
import { navLinks } from "../../../data/navLinks";
import { HeaderStyled } from "./Header.Styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <a className="uppercase text-sm" href="/">
        Clara Both
      </a>
      <NavBar links={navLinks} />
    </HeaderStyled>
  );
};
