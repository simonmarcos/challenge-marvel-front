import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);
