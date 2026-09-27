import styled from "styled-components";
import { resetContainer } from "../../style/Mixins";

export const ProjectPageStyled = styled.section`
  ${resetContainer}
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: ${({ theme }) => theme.space.xxl};
  padding-block: ${({ theme }) => theme.space.section};

  @media (width < ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.s};

  h1 {
    font-size: ${({ theme }) => theme.fontSize.h2};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export const ProjectIntro = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.2;
`;

export const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 1.4;
  max-width: 50ch;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.s};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.space.l};
`;

export const ProjectMedia = styled.div`
  aspect-ratio: 3 / 2;
  background-color: ${({ theme }) => theme.color.placeholder};

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
