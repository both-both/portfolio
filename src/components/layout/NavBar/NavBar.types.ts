import type { Translations } from "../../../i18n/da";

export type NavLink = {
  key: keyof Translations["nav"];
  href: string;
};

export type NavBarProps = {
  links: NavLink[];
};
