import { SocialLinkItem } from "../../SocialLinkItem/SocialLinkItem";
import { socialLinks } from "../../../data/socialLinks";
import { Button } from "../../Button/Button";
import {
  FooterStyled,
  FooterHeading,
  FooterActions,
  SocialLinksList,
} from "./Footer.Styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterHeading>get in touch</FooterHeading>
      <FooterActions>
        <Button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top
        </Button>
        <SocialLinksList>
          {socialLinks.map((link) => (
            <SocialLinkItem
              key={link.href}
              label={link.label}
              href={link.href}
              external={link.external}
            />
          ))}
        </SocialLinksList>
      </FooterActions>
    </FooterStyled>
  );
};
