import styled from "styled-components";
import { resetContainer } from "../../../style/Mixins";

export const HeaderStyled = styled.header`
  ${resetContainer}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.25rem;

  a {
    text-transform: uppercase;
    font-size: 0.875rem;
    transition: text-underline-offset 200ms;
    font-weight: 500;
  }
`;
