import React from "react";
import LoginComponent from "../../components/login";

const LoginPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return <LoginComponent handleSubmit={handleSubmit} />;
};

export default LoginPage;
