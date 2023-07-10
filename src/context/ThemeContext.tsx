import { createContext, ReactElement, useEffect, useState } from "react";
import { ThemeContextType } from "../@types/Theme";

const ThemeContext = createContext<ThemeContextType>({});

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);

    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    localTheme && setTheme(localTheme);
  }, []);

  const value = {
    theme,
    themeToggler,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
