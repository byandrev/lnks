export default interface ThemeType {
  bg: string;
  text: string;
  border: string;
}

export interface ThemeContextType {
  theme?: string;
  themeToggler?: () => void;
}
