import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../../entities/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);
