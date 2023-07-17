import { styled } from "styled-components";

export const LoaderStyled = styled.div<{ $mx?: number; $my?: number }>`
  margin-top: ${(props) => props.$my || 0}rem;
  margin-bottom: ${(props) => props.$my || 0}rem;
  margin-left: ${(props) => props.$mx || 0}rem;
  margin-right: ${(props) => props.$mx || 0}rem;
  text-align: center;
`;
