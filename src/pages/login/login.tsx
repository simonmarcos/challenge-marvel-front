import useInitializeState from "../../components/login/hook/useInitializeStates";
import LoginComponent from "../../components/login/login-component";
import { ILoginModel } from "../../shared/model/Login";

const LoginPage = () => {
  const { authenticate } = useInitializeState();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const emailForm = formData.get("email")?.toString();
    const passwordForm = formData.get("password")?.toString();

    const loginData: ILoginModel = {
      email: emailForm,
      password: passwordForm,
    };

    authenticate(loginData);
  };

  return <LoginComponent handleSubmit={handleSubmit} />;
};

export default LoginPage;
