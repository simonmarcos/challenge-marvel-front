import { AxiosError } from "axios";
import { useState } from "react";
import { axiosInstance } from "../../config/axios-interceptor";

interface IUseFetchAPI {
  data: any;
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

const useFetchAPI = () => {
  const [initialValues, setInitialValues] = useState(INITIAL_FETCH_VALUES);

  const execute = (httpMethod: string, path: string, data?: any) => {
    switch (httpMethod) {
      case "get":
        axiosInstance
          .get(`/api${path}`)
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
      case "post":
        axiosInstance
          .post(`/api${path}`, data)
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
  return { ...initialValues, execute };
};

export default useFetchAPI;
