import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInitializeState from "../../components/login/hook/useInitializeStates";
import LoginComponent from "../../components/login/login-component";
import { ILoginModel } from "../../shared/model/Login";
import { getLoginUser } from "../../store/slices/authenticationSlice";
import { AppDispatch, RootState } from "../../store/store";

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const execute = useInitializeState();

  const isAuthenticated = useSelector(
    (state: RootState) => state.authenticationSlice.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      execute();
    }
  }, [isAuthenticated]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const emailForm = formData.get("email")?.toString();
    const passwordForm = formData.get("password")?.toString();

    const loginData: ILoginModel = {
      email: emailForm,
      password: passwordForm,
    };

    dispatch(getLoginUser(loginData));
  };

  return <LoginComponent handleSubmit={handleSubmit} />;
};

export default LoginPage;
