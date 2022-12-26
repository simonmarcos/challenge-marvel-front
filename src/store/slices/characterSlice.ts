import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import {
  ICharacterModel,
  IQueryParamsCharacter,
} from "../../shared/model/Character";
import { axiosInstance } from "../../config/axios-interceptor";
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

const apiUrl = "character";

export const getEntitiesForMarvelAPI = createAsyncThunk(
  "character/fetch_list",
  async (values: IQueryParamsCharacter) => {
    const requestUrl = `${apiUrl}/findAllFromMarvelApi`;
    // ${
    //   values.sort &&
    //   `page=${values.page}&size=${values.size}&sort=${values.sort}`
    // }`;

    return await axiosInstance.get<ICharacterModel[]>(requestUrl);
  }
);

export const getEntitiesByUser = createAsyncThunk(
  "character/fetch_list",
  async (values: IQueryParamsCharacter) => {
    const requestUrl = `${apiUrl}/findAllByUser?user=${values.userId}`;
    // ${
    //   values.sort &&
    //   `page=${values.page}&size=${values.size}&sort=${values.sort}`
    // }`;

    return await axiosInstance.get<ICharacterModel[]>(requestUrl);
  }
);

export const characterSlice = createSlice({
  name: "character",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isPending(getEntitiesForMarvelAPI, getEntitiesByUser),
      (state) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      isFulfilled(getEntitiesForMarvelAPI, getEntitiesByUser),
      (state, action) => {
        state.loading = false;
        state.characters = action.payload.data;
        state.error = "";
      }
    );
    builder.addMatcher(
      isRejected(getEntitiesForMarvelAPI, getEntitiesByUser),
      (state, action) => {
        state.loading = false;
        state.characters = [];
        state.error = action.error.message || "Se produjo un error";
      }
    );
  },
});

export default characterSlice.reducer;
