import { Outlet } from "react-router-dom";
import NavbarPage from "../../pages/navbar/navbar";
import withAuth from "../hoc/authenticated";

import "./styles.scss";

const LayoutPublic = () => {
  return (
    <>
      <NavbarPage />
      <main className="container">
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </>
  );
};

export default withAuth(LayoutPublic);
