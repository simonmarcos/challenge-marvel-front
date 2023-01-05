import { createSlice } from "@reduxjs/toolkit";

export interface PaginationState {
  page: number;
}

const initialState: PaginationState = {
  page: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState: initialState,
  reducers: {
    setPagination: (_state, action) => {
      return {
        page: action.payload,
      };
    },
  },
});

export const { setPagination } = paginationSlice.actions;
export default paginationSlice.reducer;
