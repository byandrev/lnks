import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./theme/globalStyles.ts";
import useDarkMode from "./hooks/useDarkMode.ts";

function App() {
  const { theme } = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles theme={themeMode} />
      <span>Hello</span>
    </ThemeProvider>
  );
}

export default App;
