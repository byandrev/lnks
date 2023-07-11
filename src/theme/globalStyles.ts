import { createGlobalStyle } from "styled-components";
import ThemeType from "../@types/Theme";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }: { theme: ThemeType }) => theme.bg};
    color: ${({ theme }: { theme: ThemeType }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    padding: 0;
    margin: 0;
  }
  
  a {
    color: ${(props) => props.theme.brand}
  }
  `;
