import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginPage from "../../pages/login/login";
import { setAuthentication } from "../../store/slices/authenticationSlice";
import { AppDispatch, RootState } from "../../store/store";

const withAuth = (Component: FC) => {
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
      if (!isAuthenticated) {
        navigate("/login", { replace: true });
      }
    }, [isAuthenticated]);

    return isAuthenticated ? <Component /> : <LoginPage />;
  };

  return WrappedComponent;
};

export default withAuth;
