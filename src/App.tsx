import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./theme/globalStyles.ts";
import useDarkMode from "./hooks/useDarkMode.ts";
import Toggle from "./components/toggle";

function App() {
  const { theme } = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles theme={themeMode} />
      <span>Hello</span>
      <Toggle />
    </ThemeProvider>
  );
}

export default App;
