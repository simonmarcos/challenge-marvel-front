import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axios-interceptor";
import { IQueryParamsUser, IUserModel } from "../../shared/model/User";
export interface UserState {
  users: IUserModel[];
  error: string;
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  error: "",
  loading: false,
};

const apiUrl = "user";

export const getEntities = createAsyncThunk(
  "User/fetch_list",
  async (values: IQueryParamsUser) => {
    const requestUrl = `${apiUrl}`;
    // ${
    //   values.sort &&
    //   `page=${values.page}&size=${values.size}&sort=${values.sort}`
    // }`;

    return await axiosInstance.get<IUserModel[]>(requestUrl);
  }
);

export const UserSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEntities.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEntities.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload.data;
      state.error = "";
    });
    builder.addCase(getEntities.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Se produjo un error";
    });
  },
});

export default UserSlice.reducer;
