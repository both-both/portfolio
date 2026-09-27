import type { ButtonProps } from "./Button.types";
import { ButtonStyled } from "./Button.styled";

export const Button = ({ children, type, onClick, ariaLabel }: ButtonProps) => {
  return (
    <ButtonStyled type={type} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </ButtonStyled>
  );
};
