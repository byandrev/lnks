import { FC } from "react";
import { BadgeStyled } from "./styles";
import { useTheme } from "styled-components";

interface Props {
  text: string;
  bgColor?: string;
  textColor?: string;
}

const Badge: FC<Props> = ({ text, bgColor, textColor }) => {
  const theme = useTheme();

  return (
    <BadgeStyled
      $bgColor={bgColor || theme.brand}
      $textColor={textColor || "fff"}
    >
      {text}
    </BadgeStyled>
  );
};

export default Badge;
