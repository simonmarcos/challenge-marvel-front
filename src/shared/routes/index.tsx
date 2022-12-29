import { createBrowserRouter } from "react-router-dom";
import CharacterPage from "../../pages/character/character";
import HomePage from "../../pages/home/home";
import LoginPage from "../../pages/login/login";
import NotFoundPage from "../../pages/not-found/not-found";
import LayoutPublic from "../layout/LayoutPublic";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/character",
        element: <CharacterPage />,
      },
    ],
  },
]);
