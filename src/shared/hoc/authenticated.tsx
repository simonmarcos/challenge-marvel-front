import { useDispatch, useSelector } from "react-redux";
import LoginPage from "../../pages/login/login";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setAuthentication } from "../../store/slices/authenticationSlice";

const withAuth = (Component: any) => {
  const WrappedComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const isAuthenticated = useSelector(
      (state: RootState) => state.authenticationSlice.isAuthenticated
    );

    useEffect(() => {
      dispatch(setAuthentication());
    }, []);

    useEffect(() => {
      if (isAuthenticated) {
        navigate("/home");
      } else {
        navigate("/login", { replace: true });
      }
    }, [isAuthenticated]);

    return isAuthenticated ? <Component /> : <LoginPage />;
  };

  return WrappedComponent;
};

export default withAuth;
