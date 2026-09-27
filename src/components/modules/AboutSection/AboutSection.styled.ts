import styled from "styled-components";
import { resetContainer } from "../../../style/Mixins";

export const AboutSectionStyled = styled.section`
  ${resetContainer}
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: ${({ theme }) => theme.space.l};
  padding-block: ${({ theme }) => theme.space.section};

  padding-left: 8%;
  padding-right: calc(90% * 0.33 / 2);

  @media (width < ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
    padding-inline: 0;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xxl};
  padding-top: ${({ theme }) => theme.space.l};
`;

export const AboutIntro = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.2;
  max-width: 24ch;
`;

export const AboutBody = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 1.4;
  max-width: 50ch;
  margin-left: 20%;

  @media (width < ${({ theme }) => theme.breakpoint.mobile}) {
    margin-left: 0;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  max-width: 20rem;
  aspect-ratio: 5 / 6;
  object-fit: cover;
  justify-self: end;

  @media (width < ${({ theme }) => theme.breakpoint.mobile}) {
    justify-self: start;
  }
`;
