import { ReactNode } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 0.7rem 1.5rem;
  border: none;
  background-color: ${(props) => props.theme.brand};
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  font-family: inherit;
  border-radius: 0.3rem;
`;

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: Props) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
}

export default Button;
