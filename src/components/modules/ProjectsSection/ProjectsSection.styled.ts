import styled from "styled-components";
import { resetContainer, resetList } from "../../../style/Mixins";

export const ProjectsSectionStyled = styled.section`
  ${resetContainer}
  padding-block: 4rem;

  h2 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 2.5rem;
  }

  ul {
    ${resetList}
    width: 67%;
    margin-inline: auto;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: calc((100% - 0.75rem) / 2);
    gap: 0.75rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    @media (width < 768px) {
      width: 100%;
      grid-auto-columns: 100%;
    }
  }

  li {
    scroll-snap-align: start;
  }

  svg {
    font-size: 1.75rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding-inline: 8%;
    margin-top: 1.5rem;
    font-size: 1.5rem;
  }
`;
