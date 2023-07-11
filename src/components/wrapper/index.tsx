import { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";
import Container from "../common/container";

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default Wrapper;
