import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { ILoggedInModel } from "../shared/model/LoggedIn";

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

const setupAxiosInterceptors = (onUnauthenticated: () => void) => {
  const onTokinIsValid = (config: AxiosRequestConfig | any) => {
    const loggedIn: ILoggedInModel = JSON.parse(
      window.localStorage.getItem("loggedIn")!
    );
    if (config.headers) {
      if (loggedIn) config.headers.Authorization = "Bearer " + loggedIn.token;
    }
    return config;
  };
  const onRequestSuccess = (config: AxiosRequestConfig | any) => {
    return config;
  };

  const onResponseSuccess = (config: AxiosRequestConfig | any) => config;
  const onResponseError = (err: AxiosError) => {
    const status = err.response?.status || 0;
    if (status === 403 || status === 401) {
      onUnauthenticated();
      window.localStorage.removeItem("loggedIn");
    }
    return Promise.reject(err);
  };

  axiosInstance.interceptors.request.use(onTokinIsValid, onRequestSuccess);
  axiosInstance.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
