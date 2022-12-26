import { Outlet } from "react-router-dom";
import NavbarPage from "../../pages/navbar";

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

export default LayoutPublic;
