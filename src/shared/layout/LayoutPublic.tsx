import { Outlet } from "react-router-dom";
import NavbarPage from "../../pages/navbar/navbar";
import withAuth from "../hoc/authenticated";

const LayoutPublic = () => {
  return (
    <>
      <NavbarPage />
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </>
  );
};

export default withAuth(LayoutPublic);
