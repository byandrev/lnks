import { ReactNode } from "react";
import { ButtonStyled, ButtonText } from "./styles.tsx";

interface Props {
  children?: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
}

function Button({ children, icon, onClick }: Props) {
  return (
    <ButtonStyled onClick={onClick}>
      {icon && icon}
      {children && <ButtonText>{children}</ButtonText>}
    </ButtonStyled>
  );
}

export default Button;
