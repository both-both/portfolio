import { NavBar } from "../Navbar/Navbar";
import { navLinks } from "../../../data/navLinks";

export const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-primary/20 px-8 py-5">
      <a href="/" className="text-lg font-bold">
        Clara Both
      </a>
      <NavBar links={navLinks} />
    </header>
  );
};
