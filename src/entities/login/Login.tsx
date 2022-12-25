import React from "react";
import { useDispatch } from "react-redux";
import LoginComponent from "../../components/login";
import { ILoginModel } from "../../shared/model/Login";
import { singInAplications as singInApplications } from "../../store/slices/loginSlice";
import { AppDispatch } from "../../store/store";

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data: ILoginModel = {
      email: formData.get("email")?.toString(),
      password: formData.get("password")?.toString(),
    };

    dispatch(singInApplications(data));
  };

  return <LoginComponent handleSubmit={handleSubmit} />;
};

export default LoginPage;
