import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./slices/characterSlice";
import authenticationSlice from "./slices/authenticationSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    characterSlice,
    authenticationSlice,
    userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
