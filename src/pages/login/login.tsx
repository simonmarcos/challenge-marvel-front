import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginComponent from "../../components/login/login-component";
import { ILoginModel } from "../../shared/model/Login";
import { AppDispatch, RootState } from "../../store/store";

import { useNavigate } from "react-router-dom";
import { getLoginUser } from "../../store/slices/authenticationSlice";
import { getEntityByEmail as getUserByEmail } from "../../store/slices/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state: RootState) => state.authenticationSlice.isAuthenticated
  );

  const emailUserLogged = useSelector(
    (state: RootState) => state.authenticationSlice.user
  );

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserByEmail(emailUserLogged));
      navigate("/home");
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
