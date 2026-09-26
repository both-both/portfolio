import styled from "styled-components";
import { resetContainer } from "../../../style/Mixins";

export const FooterStyled = styled.div`
  ${resetContainer}
`;

export const FooterHeading = styled.p`
  font-size: 16vw;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`;

export const FooterActions = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  gap: 2rem;
  padding-top: 2rem;
`;

export const SocialLinksList = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;
