import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./theme/globalStyles.ts";
import useDarkMode from "./hooks/useDarkMode.ts";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./context/UserContext.tsx";

function App() {
  const { theme } = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <QueryClientProvider client={new QueryClient()}>
        <UserProvider>
          <GlobalStyles theme={themeMode} />
          <RouterProvider router={router} />
        </UserProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
