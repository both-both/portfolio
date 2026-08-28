import { SocialLinkItem } from "../../SocialLinkItem/SocialLinkItem";
import { socialLinks } from "../../../data/socialLinks";

export const Footer = () => {
  return (
    <footer>
      <h2>get in touch</h2>
      {socialLinks.map((link) => (
        <SocialLinkItem
          key={link.href}
          label={link.label}
          href={link.href}
          external={link.external}
        />
      ))}
    </footer>
  );
};
