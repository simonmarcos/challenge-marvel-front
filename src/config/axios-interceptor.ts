import axios, { AxiosError, AxiosRequestConfig } from "axios";

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

const setupAxiosInterceptors = (onUnauthenticated: () => void) => {
  const onTokinIsValid = (config: AxiosRequestConfig | any) => {
    const token: string | null = window.localStorage.getItem("token");

    if (config.headers) {
      if (token) config.headers.Authorization = "Bearer " + token;
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
      window.localStorage.setItem("token", "");
    }
    return Promise.reject(err);
  };

  axiosInstance.interceptors.request.use(onTokinIsValid, onRequestSuccess);
  axiosInstance.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
