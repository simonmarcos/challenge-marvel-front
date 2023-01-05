import { configureStore } from "@reduxjs/toolkit";
import CharacterSlice from "./slices/characterSlice";
import authenticationSlice from "./slices/authenticationSlice";
import userSlice from "./slices/userSlice";
import paginationSlice from "./slices/paginationSilice";

export const store = configureStore({
  reducer: {
    characterSlice: CharacterSlice,
    authenticationSlice,
    userSlice,
    paginationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
