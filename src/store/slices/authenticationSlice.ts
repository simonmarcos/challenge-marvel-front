import { createAsyncThunk, createSlice, Dispatch } from "@reduxjs/toolkit";

import { axiosInstance } from "../../config/axios-interceptor";
import { ILoginModel } from "../../shared/model/Login";
import { IResponseLoginModel } from "../../shared/model/ResponseLogin";

const initialState = {
  user: "",
  loading: false,
  isAuthenticated: false,
  isSuccess: false,
  error: null as unknown as string,
};

const apiUrl = "login";

export const getLoginUser = createAsyncThunk(
  "authentication/get_login",
  async (data: ILoginModel) => {
    const response = await axiosInstance.post<IResponseLoginModel>(
      apiUrl,
      data
    );

    if (response.status === 200) {
      window.localStorage.setItem("token", response.data.token!);
    }

    return data.email;
  }
);

export const clearAuthentication = () => (dispatch: Dispatch) => {
  dispatch(clearAuth());
};

export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    setAuthentication: (state) => {
      if (window.localStorage.getItem("token")) {
        return {
          ...state,
          isAuthenticated: true,
        };
      }
      return state;
    },
    clearAuth: (state) => {
      return {
        ...state,
        isAuthenticated: false,
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getLoginUser.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
      state.isSuccess = false;
    });
    builder.addCase(getLoginUser.fulfilled, (state, action) => {
      state.user = action.payload!;
      state.loading = false;
      state.isAuthenticated = true;
      state.isSuccess = true;
    });
    builder.addCase(getLoginUser.rejected, (state, action) => {
      state.user = "";
      state.loading = false;
      state.error = action.error.message || "Se produjo un error";
      state.isSuccess = false;
    });
  },
});

export const { setAuthentication, clearAuth } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
