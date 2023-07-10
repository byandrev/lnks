import { useEffect, useState } from "react";

function useDarkMode() {
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

  return { theme, themeToggler };
}

export default useDarkMode;
