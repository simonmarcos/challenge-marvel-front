import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axiosInstance } from "../../config/axios-interceptor";
import { ILoginModel } from "../../shared/model/Login";
import { IResponseLoginModel } from "../../shared/model/ResponseLogin";

const initialState = {
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
      window.localStorage.setItem("login", response.data.token!);
    }
  }
);

export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLoginUser.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
      state.isSuccess = false;
    });
    builder.addCase(getLoginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.isSuccess = true;
    });
    builder.addCase(getLoginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Se produjo un error";
      state.isSuccess = false;
    });
  },
});

export default AuthenticationSlice.reducer;
