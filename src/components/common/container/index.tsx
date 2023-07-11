import { ReactNode } from "react";
import { ContainerStyled } from "./styles.tsx";

function Container({ children }: { children?: ReactNode }) {
  return <ContainerStyled>{children}</ContainerStyled>;
}

export default Container;
