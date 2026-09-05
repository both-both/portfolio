import styled from "styled-components";
import { resetContainer } from "../../../style/Mixins";

export const HeaderStyled = styled.header`
  ${resetContainer}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.25rem;
`;
