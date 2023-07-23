import { styled } from "styled-components";

export const ParagraphStyled = styled.p<{
  $size?: string;
  $color?: string;
  $mx?: string;
  $my?: string;
}>`
  font-size: ${(props) => props.$size || "1"}rem;
  color: ${(props) => props.$color || props.theme.text};
  margin-top: ${(props) => props.$my || "0"}rem;
  margin-bottom: ${(props) => props.$my || "0"}rem;
  margin-left: ${(props) => props.$mx || "0"}rem;
  margin-left: ${(props) => props.$mx || "0"}rem;
`;
