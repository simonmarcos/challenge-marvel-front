import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginComponent from "../../components/login/login-component";
import { ILoginModel } from "../../shared/model/Login";
import { AppDispatch, RootState } from "../../store/store";

import { useNavigate } from "react-router-dom";
import { ILoggedInModel } from "../../shared/model/LoggedIn";
import { getLoginUser } from "../../store/slices/authenticationSlice";
import { getEntityByEmail as getUserByEmail } from "../../store/slices/userSlice";
import { getEntitiesByUser } from "../../store/slices/characterSlice";
import { IUserModel } from "../../shared/model/User";

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state: RootState) => state.authenticationSlice.isAuthenticated
  );

  const userEntity: IUserModel = useSelector(
    (state: RootState) => state.userSlice.user
  );

  const isSuccessUser = useSelector(
    (state: RootState) => state.userSlice.success
  );

  useEffect(() => {
    if (isAuthenticated) {
      const loggedIn: ILoggedInModel = JSON.parse(
        window.localStorage.getItem("loggedIn")!
      );
      dispatch(getUserByEmail(loggedIn?.email!));
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isSuccessUser) {
      dispatch(getEntitiesByUser({ userId: userEntity.id! }));
      navigate("/home");
    }
  }, [isSuccessUser]);

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
