import styled from "styled-components";
import { resetContainer } from "../../../style/Mixins";

export const HeroSectionStyled = styled.section`
  ${resetContainer}
  padding-block-start: calc(${({ theme }) => theme.space.section} * 2.6);
  padding-block-end: ${({ theme }) => theme.space.section};

  h1 {
    font-size: ${({ theme }) => theme.fontSize.hero};
    font-weight: 800;
    font-style: italic;
    line-height: 1;
    text-align: center;
  }
`;
