import { useSelector } from "react-redux";
import LoginPage from "../../pages/login/login";
import { RootState } from "../../store/store";

const withAuth = (Component: any) => {
  const WrappedComponent = () => {
    const isAuthenticated: boolean = useSelector(
      (state: RootState) => state.authenticationSlice.isAuthenticated
    );

    return isAuthenticated ? <Component /> : <LoginPage />;
  };

  return WrappedComponent;
};

export default withAuth;
