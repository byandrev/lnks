import { FC } from "react";
import "./styles.css";
import { LoaderStyled } from "./styles";

interface Props {
  mx?: number;
  my?: number;
}

const Loader: FC<Props> = ({ mx, my }) => {
  return (
    <LoaderStyled className="loader" $mx={mx} $my={my}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderStyled>
  );
};

export default Loader;
