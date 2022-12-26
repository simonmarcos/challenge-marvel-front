import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { IUserModel } from "../../shared/model/User";

import { axiosInstance } from "../../config/axios-interceptor";
export interface UserState {
  user: {};
  errorMessage: string | null;
  loading: boolean;
}

const initialState: UserState = {
  user: {},
  errorMessage: null,
  loading: false,
};

const apiUrl = "/api/user";

export const getEntity = createAsyncThunk(
  "User/fetch_user",
  async (value: string) => {
    const requestUrl = apiUrl;

    return (await axiosInstance.post(requestUrl, value)).data;
  }
);

export const getEntityByEmail = createAsyncThunk(
  "User/fetch_by_email",
  async (value: string) => {
    const requestUrl = `${apiUrl}/findByEmail?email=${value}`;

    return (await axiosInstance.get<IUserModel>(requestUrl)).data;
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
    });
    builder.addMatcher(
      isFulfilled(getEntity, getEntityByEmail),
      (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.errorMessage = null;
      }
    );
    builder.addMatcher(
      isRejected(getEntity, getEntityByEmail),
      (state, action) => {
        state.loading = false;
        state.user = {};
        state.errorMessage = action.error.message || "Se produjo un error";
      }
    );
  },
});

export default UserSlice.reducer;
