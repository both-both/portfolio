import type { SocialLinkItemProps } from "./SocialLinkItem.types";

export const SocialLinkItem = ({
  label,
  href,
  external,
}: SocialLinkItemProps) => {
  return (
    <a
      className="duration-200 hover:underline hover:underline-offset-4 text-sm"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
};
