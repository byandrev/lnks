import { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Wrapper;
