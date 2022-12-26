import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./slices/characterSlice";
import authenticationSlice from "./slices/authenticationSlice";

export const store = configureStore({
  reducer: {
    characterSlice,
    authenticationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
