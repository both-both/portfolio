import type { ButtonProps } from "./Button.types";
import { ButtonStyled } from "./Button.styled";

export const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
