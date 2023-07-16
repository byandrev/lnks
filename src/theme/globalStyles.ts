import { createGlobalStyle } from "styled-components";
import ThemeType from "../@types/Theme";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Ubuntu";
    src: url("/fonts/ubuntu/Ubuntu-Regular.ttf") format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("/fonts/ubuntu/Ubuntu-Medium.ttf") format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("/fonts/ubuntu/Ubuntu-Bold.ttf") format("truetype");
    font-weight: bold;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }: { theme: ThemeType }) => theme.bg};
    color: ${({ theme }: { theme: ThemeType }) => theme.text};
    font-family: "Ubuntu", Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    font-weight: 300;
    padding: 0;
    margin: 0;
  }
  
  a {
    color: ${(props) => props.theme.brand}
  }
  `;
