import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./theme/globalStyles.ts";
import useDarkMode from "./hooks/useDarkMode.ts";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  const { theme } = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles theme={themeMode} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
