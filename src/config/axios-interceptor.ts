import axios from "axios";

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
});
