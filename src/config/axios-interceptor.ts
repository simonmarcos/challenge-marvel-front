import axios, { AxiosError } from "axios";

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token: string | null = window.localStorage.getItem("token");

    if (config.headers) {
      if (token) config.headers.Authorization = "Bearer " + token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const setupAxiosInterceptors = (onUnauthenticated: () => void) => {
  const onRequestSuccess = (config: any) => {
    return config;
  };
  const onResponseSuccess = (response: any) => response;
  const onResponseError = (err: { status: any; response: { status: any } }) => {
    const status = err.status || (err.response ? err.response.status : 0);
    if (status === 403 || status === 401) {
      onUnauthenticated();
      window.localStorage.setItem("token", "");
    }
    return Promise.reject(err);
  };

  axiosInstance.interceptors.request.use(onRequestSuccess);
  axiosInstance.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
