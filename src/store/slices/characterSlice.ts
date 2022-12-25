import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ICharacterModel,
  IQueryParamsCharacter,
} from "../../shared/model/Character";
import axios from "axios";

const initialState = {
  characters: {},
  error: "",
  loading: false,
};

const apiUrl = "api/character";

export const getEntities = createAsyncThunk(
  "accounts/fetch_character_list",
  async (values: IQueryParamsCharacter) => {
    const requestUrl = `${apiUrl}/findAllById${
      values.sort &&
      `?page=${values.page}&size=${values.size}&sort=${values.sort}`
    }`;

    return (await axios.get<ICharacterModel[]>(requestUrl)).data;
  }
);

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEntities.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEntities.fulfilled, (state, action) => {
      state.loading = false;
      state.characters = action.payload;
      state.error = "";
    });
    builder.addCase(getEntities.rejected, (state, action) => {
      state.loading = false;
      state.characters = [];
      state.error = action.error.message || "Se produjo un error";
    });
  },
});

export default characterSlice.reducer;
