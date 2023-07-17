import { ReactNode } from "react";
import { ButtonStyled, ButtonText } from "./styles.tsx";
import Loader from "../loader";

interface Props {
  children?: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  color?: string;
}

function Button({
  children,
  icon,
  isDisabled = false,
  isLoading = false,
  onClick,
  color = "brand",
}: Props) {
  return (
    <ButtonStyled onClick={onClick} disabled={isDisabled} $color={color}>
      {isLoading ? <Loader /> : icon && icon}
      {children && <ButtonText>{children}</ButtonText>}
    </ButtonStyled>
  );
}

export default Button;
