import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected
} from "@reduxjs/toolkit";
import { IUserModel } from "../../shared/model/User";

import { axiosInstance } from "../../config/axios-interceptor";
export interface UserState {
  user: {};
  errorMessage: string | null;
  loading: boolean;
  success: boolean;
}

const initialState: UserState = {
  user: {},
  errorMessage: null,
  loading: false,
  success: false,
};

const apiUrl = "/api/user";

export const getEntity = createAsyncThunk(
  "User/fetch_user",
  async (value: string) => {
    const requestUrl = apiUrl;

    return await (
      await axiosInstance.post(requestUrl, value)
    ).data;
  }
);

export const getEntityByEmail = createAsyncThunk(
  "User/fetch_by_email",
  async (value: string) => {
    const requestUrl = `${apiUrl}/findByEmail?email=${value}`;

    return await (
      await axiosInstance.get<IUserModel>(requestUrl)
    ).data;
  }
);

export const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isPending(getEntity, getEntityByEmail), (state) => {
      state.loading = true;
      state.errorMessage = null;
      state.success = false;
    });
    builder.addMatcher(
      isFulfilled(getEntity, getEntityByEmail),
      (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = true;
        state.errorMessage = null;
      }
    );
    builder.addMatcher(
      isRejected(getEntity, getEntityByEmail),
      (state, action) => {
        state.loading = false;
        state.user = {};
        state.success = false;
        state.errorMessage = action.error.message || "Se produjo un error";
      }
    );
  },
});

export default UserSlice.reducer;
