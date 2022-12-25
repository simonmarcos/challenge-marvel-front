import axios from "axios";

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token: string | null = window.localStorage.getItem("loginStorage");

    if (config.headers) {
      if (token) config.headers.Authorization = "Bearer " + token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
