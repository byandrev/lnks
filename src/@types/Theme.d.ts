export default interface ThemeType {
  bg: string;
  bgAlt: string;
  text: string;
  textLight: string;
  border: string;
  brandLight: string;
  brand: string;
  brandDark: string;
  warning: string;
}

export interface ThemeContextType {
  theme?: string;
  themeToggler?: () => void;
}
