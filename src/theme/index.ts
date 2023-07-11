import { DefaultTheme } from "styled-components";

const baseStyles = {
  brandLight: "#81c784",
  brand: "#66bb6a",
  brandDark: "#388e3c",
};

export const lightTheme: DefaultTheme = {
  bg: "#fff",
  text: "#363537",
  border: "#aaa",
  ...baseStyles,
};

export const darkTheme: DefaultTheme = {
  bg: "#1a1a1a",
  text: "#FAFAFA",
  border: "#444",
  ...baseStyles,
};
