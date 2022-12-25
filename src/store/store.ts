import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./slices/characterSlice";

export const store = configureStore({
  reducer: {
    characterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
