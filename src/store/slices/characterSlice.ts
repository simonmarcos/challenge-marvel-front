import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ICharacterModel,
  IQueryParamsCharacter,
} from "../../shared/model/Character";
import axios from "axios";
export interface CharacterState {
  characters: ICharacterModel[];
  error: string;
  loading: boolean;
}

const initialState: CharacterState = {
  characters: [],
  error: "",
  loading: false,
};

const apiUrl = "api/character";

export const getEntities = createAsyncThunk(
  "accounts/fetch_character_list",
  async (values: IQueryParamsCharacter) => {
    const requestUrl = `${apiUrl}/findAllByUser?user=${values.userId}`;
    // ${
    //   values.sort &&
    //   `page=${values.page}&size=${values.size}&sort=${values.sort}`
    // }`;

    return await axios.get<ICharacterModel[]>(requestUrl);
  }
);

export const characterSlice = createSlice({
  name: "character",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEntities.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEntities.fulfilled, (state, action) => {
      state.loading = false;
      state.characters = action.payload.data;
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
