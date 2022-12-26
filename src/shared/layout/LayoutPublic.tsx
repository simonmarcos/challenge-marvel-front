import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <>
      <nav>NAV BAR</nav>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </>
  );
};

export default LayoutPublic;
