import type { NavBarProps } from "./NavBar.types";

export const NavBar = ({ links }: NavBarProps) => {
  return (
    <nav className="flex gap-8 text-sm uppercase  ">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="duration-200 hover:underline hover:underline-offset-4"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};
