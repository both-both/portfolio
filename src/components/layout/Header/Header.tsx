import { NavBar } from "../Navbar/Navbar";
import { navLinks } from "../../../data/navLinks";

export const Header = () => {
  return (
    <header className="flex items-center justify-between  px-20 py-5">
      <a href="/" className="italic">
        Clara Both
      </a>
      <NavBar links={navLinks} />
    </header>
  );
};
