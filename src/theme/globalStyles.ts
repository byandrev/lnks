import { createGlobalStyle } from "styled-components";
import ThemeType from "../@types/Theme";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: { theme: ThemeType }) => theme.bg};
    color: ${({ theme }: { theme: ThemeType }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;
