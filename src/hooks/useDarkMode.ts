import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.tsx";

function useDarkMode() {
  const { theme, themeToggler } = useContext(ThemeContext);
  return { theme, themeToggler };
}

export default useDarkMode;
