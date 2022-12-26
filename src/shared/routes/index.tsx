import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../../pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);
