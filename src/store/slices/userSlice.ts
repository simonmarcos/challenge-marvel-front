import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUserModel } from "../../shared/model/User";

import { axiosInstance } from "../../config/axios-interceptor";
export interface UserState {
  user: [];
  error: string;
  loading: boolean;
}

const initialState: UserState = {
  user: [],
  error: "",
  loading: false,
};

const apiUrl = "user";

export const getEntity = createAsyncThunk(
  "User/fetch_User",
  async (values: IUserModel) => {
    const requestUrl = apiUrl;

    return (await axiosInstance.post(requestUrl, values)).data;
  }
);

export const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEntity.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEntity.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(getEntity.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message || "Se produjo un error";
    });
  },
});

export default UserSlice.reducer;
