import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home/home";
import LoginPage from "../../pages/login/login";
import NotFoundPage from "../../pages/not-found/not-found";
import LayoutPublic from "../layout/LayoutPublic";

export const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
]);
