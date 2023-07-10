import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";
import { GlobalStyles } from "./theme/globalStyles.ts";

function App() {
  const [theme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles theme={theme === "light" ? lightTheme : darkTheme} />
      <span>Hello</span>
    </ThemeProvider>
  );
}

export default App;
