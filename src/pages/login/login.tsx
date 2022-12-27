import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginComponent from "../../components/login/login-component";
import { ILoginModel } from "../../shared/model/Login";
import { AppDispatch, RootState } from "../../store/store";

import { getLoginUser } from "../../store/slices/authenticationSlice";
import { getEntityByEmail as getUserByEmail } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState<string>("");

  const isAuthenticated = useSelector(
    (state: RootState) => state.authenticationSlice.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated && emailValue !== "") {
      dispatch(getUserByEmail(emailValue!));
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

    setEmailValue(emailForm!);
    dispatch(getLoginUser(loginData));
  };

  return <LoginComponent handleSubmit={handleSubmit} />;
};

export default LoginPage;
