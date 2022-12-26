import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";
import NotFoundPage from "../../pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
]);
