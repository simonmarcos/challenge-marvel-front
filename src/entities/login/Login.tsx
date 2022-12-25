import React from "react";
import LoginComponent from "../../components/login";
import { axiosInstance } from "../../config/axios-interceptor";
import { ILoginModel } from "../../shared/model/Login";
import { IResponseLoginModel } from "../../shared/model/ResponseLogin";

const LoginPage = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const loginData: ILoginModel = {
      email: formData.get("email")?.toString(),
      password: formData.get("password")?.toString(),
    };

    try {
      const response: IResponseLoginModel = (
        await axiosInstance.post("/login", loginData)
      ).data;

      window.localStorage.setItem("loginStorage", JSON.stringify(response));
    } catch (error) {
      console.log(error);
    }
  };

  return <LoginComponent handleSubmit={handleSubmit} />;
};

export default LoginPage;
