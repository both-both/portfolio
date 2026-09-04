import styled from "styled-components";

export const FooterStyled = styled.div`
  width: 90%;
  margin: auto;
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
  text-transform: uppercase;
  gap: 1.25rem;
`;
