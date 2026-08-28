import { NavBar } from "../Navbar/Navbar";
import { navLinks } from "../../../data/navLinks";

export const Header = () => {
  return (
    <header className="flex items-center justify-between  px-29 py-5">
      <a className="uppercase text-sm" href="/">
        Clara Both
      </a>
      <NavBar links={navLinks} />
    </header>
  );
};
