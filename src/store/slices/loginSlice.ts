import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILoginModel } from "../../shared/model/Login";

import axios from "axios";
import { axiosInstance } from "../../config/axios-interceptor";
export interface LoginState {
  info: {};
  error: string;
  loading: boolean;
}

const initialState: LoginState = {
  info: {},
  error: "",
  loading: false,
};

const apiUrl = "login";

export const singInAplications = createAsyncThunk(
  "login/fetch_login",
  async (values: ILoginModel) => {
    const requestUrl = apiUrl;

    return (await axiosInstance.post(requestUrl, values)).data;
  }
);

export const LoginSlice = createSlice({
  name: "Login",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(singInAplications.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(singInAplications.fulfilled, (state, action) => {
      state.loading = false;
      state.info = action.payload;
      state.error = "";
    });
    builder.addCase(singInAplications.rejected, (state, action) => {
      state.loading = false;
      state.info = {};
      state.error = action.error.message || "Se produjo un error";
    });
  },
});

export default LoginSlice.reducer;
