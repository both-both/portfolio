import type { SocialLinkItemProps } from "./SocialLinkItem.types";
import { SocialLinkItemStyled } from "./SocialLinkItem.Styled";

export const SocialLinkItem = ({
  label,
  href,
  external,
}: SocialLinkItemProps) => {
  return (
    <SocialLinkItemStyled
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {label}
    </SocialLinkItemStyled>
  );
};
