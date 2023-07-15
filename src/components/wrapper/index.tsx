import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../header";
import Footer from "../footer";
import { ContainerStyled } from "../common/container/styles.tsx";

const Content = styled(ContainerStyled)`
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}

export default Wrapper;
