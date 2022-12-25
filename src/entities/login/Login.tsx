import React from "react";
import { useDispatch } from "react-redux";
import LoginComponent from "../../components/login";
import { axiosInstance } from "../../config/axios-interceptor";
import { ILoginModel } from "../../shared/model/Login";
import { AppDispatch } from "../../store/store";

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data: ILoginModel = {
      email: formData.get("email")?.toString(),
      password: formData.get("password")?.toString(),
    };

    try {
      const response = (await axiosInstance.post("login", data)).data;
      console.log("EASDSA ", response);
    } catch (error) {
      console.log(error);
    }
  };

  return <LoginComponent handleSubmit={handleSubmit} />;
};

export default LoginPage;
