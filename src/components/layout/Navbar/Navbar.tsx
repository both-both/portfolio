import type { NavBarProps } from "./Navbar.types";

export const NavBar = ({ links }: NavBarProps) => {
  return (
    <nav className="flex gap-8 text-sm">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="italic transition-opacity duration-200 hover:opacity-70"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};
