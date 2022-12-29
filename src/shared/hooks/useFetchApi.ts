import { AxiosError } from "axios";
import { useState } from "react";
import { axiosInstance } from "../../config/axios-interceptor";
import { HTTP_METHOD } from "../utils/const";

interface IUseFetchAPI {
  data: Object[];
  isPending: boolean;
  isSuccess: boolean;
  error: any;
}

const INITIAL_FETCH_VALUES: IUseFetchAPI = {
  data: [],
  isPending: true,
  isSuccess: false,
  error: null,
};

const URL_PATH = "/api";

const useFetchAPI = () => {
  const [initialValues, setInitialValues] = useState(INITIAL_FETCH_VALUES);

  const execute = (httpMethod: string, path: string, data?: Object[]) => {
    switch (httpMethod) {
      case HTTP_METHOD.GET:
        axiosInstance
          .get(`${URL_PATH}${path}`)
          .then((response) => {
            setInitialValues({
              data: response.data,
              isPending: false,
              isSuccess: true,
              error: null,
            });
          })
          .catch((error: AxiosError) => {
            setInitialValues({
              data: [],
              isPending: false,
              isSuccess: true,
              error: error,
            });
          });
        break;
      case HTTP_METHOD.POST:
        axiosInstance
          .post(`${URL_PATH}${path}`, data)
          .then((response) => {
            setInitialValues({
              data: response.data,
              isPending: false,
              isSuccess: true,
              error: null,
            });
          })
          .catch((error: AxiosError) => {
            setInitialValues({
              data: [],
              isPending: false,
              isSuccess: true,
              error: error,
            });
          });
        break;
      default:
        break;
    }
  };

  const cleanInitialValues = () => {
    setInitialValues({ ...initialValues, isPending: true, isSuccess: false });
  };

  return { ...initialValues, execute, cleanInitialValues };
};

export default useFetchAPI;
