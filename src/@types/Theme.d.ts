export default interface ThemeType {
  bg: string;
  text: string;
  border: string;
  brandLight: string;
  brand: string;
  brandDark: string;
}

export interface ThemeContextType {
  theme?: string;
  themeToggler?: () => void;
}
