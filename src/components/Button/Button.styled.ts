import styled from "styled-components";
import { resetButton } from "../../style/Mixins";

export const ButtonStyled = styled.button`
  ${resetButton}
  text-transform: uppercase;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;
