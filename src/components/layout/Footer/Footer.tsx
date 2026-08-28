import { SocialLinkItem } from "../../SocialLinkItem/SocialLinkItem";
import { socialLinks } from "../../../data/socialLinks";

export const Footer = () => {
  return (
    <footer px-20 py-5>
      <h2 className="text-huge font-bold  text-center">get in touch</h2>
      <div className=" flex gap-8 justify-end px-29 uppercase">
        {socialLinks.map((link) => (
          <SocialLinkItem
            key={link.href}
            label={link.label}
            href={link.href}
            external={link.external}
          />
        ))}
      </div>
    </footer>
  );
};
