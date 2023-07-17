import Wrapper from "../../components/wrapper";
import Header from "./components/header";
import ListOfLinks from "./components/list-of-links";
import { LinksGrid } from "./styles.tsx";
import Sidebar from "./components/sidebar";
import useLinks from "../../hooks/useLinks.tsx";
import { useState } from "react";
import ModalCreate from "./components/modal-create/index.tsx";
import Loader from "../../components/common/loader/index.tsx";

function Links() {
  const { links, isLoading } = useLinks();
  const [modalState, setModalState] = useState(false);

  return (
    <Wrapper>
      <ModalCreate state={modalState} onClose={() => setModalState(false)} />

      <LinksGrid>
        <Sidebar />
        <div>
          <Header openModal={() => setModalState(true)} />
          {isLoading ? <Loader my={2} /> : <ListOfLinks links={links} />}
        </div>
      </LinksGrid>
    </Wrapper>
  );
}

export default Links;
