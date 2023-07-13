import { DefaultTheme } from "styled-components";

const baseStyles = {
  brandLight: "#81c784",
  brand: "#66bb6a",
  brandDark: "#388e3c",
};

export const lightTheme: DefaultTheme = {
  bg: "#fff",
  bgAlt: "#f2f2f2",
  text: "#363537",
  textLight: "#666",
  border: "#ddd",
  ...baseStyles,
};

export const darkTheme: DefaultTheme = {
  bg: "#1a1a1a",
  bgAlt: "#1f1f1f",
  text: "#FAFAFA",
  textLight: "#aaa",
  border: "#222",
  ...baseStyles,
};
