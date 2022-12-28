import { useSelector } from "react-redux";
import LoginPage from "../../pages/login/login";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const withAuth = (Component: any) => {
  const WrappedComponent = () => {
    const navigate = useNavigate();

    const isAuthenticated: boolean = useSelector(
      (state: RootState) => state.authenticationSlice.isAuthenticated
    );

    useEffect(() => {
      if (!isAuthenticated) navigate("/login", { replace: true });
    }, [isAuthenticated]);

    return isAuthenticated ? <Component /> : <LoginPage />;
  };

  return WrappedComponent;
};

export default withAuth;
