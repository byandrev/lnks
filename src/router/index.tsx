import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not_found";
import SignIn from "../pages/auth/signin";
import SignUp from "../pages/auth/signup";
import Links from "../pages/links";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/links",
    element: <Links />,
  },
]);

export default router;
