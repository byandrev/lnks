import { FC, ReactNode } from "react";
import { ParagraphStyled } from "./styles";

interface Props {
  children: ReactNode;
  color?: string;
  size?: string;
  my?: string;
  mx?: string;
}

const Paragraph: FC<Props> = ({ children, color, size, mx, my }) => {
  return (
    <ParagraphStyled $color={color} $size={size} $mx={mx} $my={my}>
      {children}
    </ParagraphStyled>
  );
};

export default Paragraph;
