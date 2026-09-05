import type { SocialLinkItemProps } from "./SocialLinkItem.types";

export const SocialLinkItem = ({
  label,
  href,
  external,
}: SocialLinkItemProps) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
};
