import { FC, ReactNode } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ContentStyled } from "./styles";
import { useTheme } from "styled-components";

interface Props {
  children: ReactNode;
  state: boolean;
  onClose: () => void;
}

const Modal: FC<Props> = ({ children, state, onClose }) => {
  const theme = useTheme();

  return (
    <Popup
      modal
      nested
      open={state}
      closeOnDocumentClick
      closeOnEscape
      onClose={onClose}
      contentStyle={{
        background: theme.bg,
        border: theme.border,
        borderRadius: "0.3rem",
        maxWidth: "400px",
        width: "90%",
      }}
    >
      <ContentStyled>{children}</ContentStyled>
    </Popup>
  );
};

export default Modal;
