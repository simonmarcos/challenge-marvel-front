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
    </>
  );
};

export default withAuth(LayoutPublic);
