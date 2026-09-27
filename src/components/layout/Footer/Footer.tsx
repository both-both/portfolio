import { SocialLinkItem } from "../../SocialLinkItem/SocialLinkItem";
import { socialLinks } from "../../../data/socialLinks";
import { Button } from "../../Button/Button";
import {
  FooterStyled,
  FooterHeading,
  FooterActions,
  SocialLinksList,
} from "./Footer.styled";
import { useLanguage } from "../../../hooks/useLanguage";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <FooterStyled id="contact">
      <FooterHeading>get in touch</FooterHeading>
      <FooterActions>
        <Button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {t.footer.backToTop}
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
