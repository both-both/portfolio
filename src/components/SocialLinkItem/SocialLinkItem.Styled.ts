import styled from "styled-components";
import { resetLink } from "../../style/Mixins";

export const SocialLinkItemStyled = styled.a`
  ${resetLink}
  gap: 2rem;
  text-transform: uppercase;
  font-size: 0.875rem;
  transition: text-underline-offset 200ms;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;
