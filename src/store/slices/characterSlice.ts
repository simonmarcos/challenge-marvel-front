import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected
} from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axios-interceptor";
import {
  ICharacterMarvelModel, IQueryParamsCharacter
} from "../../shared/model/Character";

export interface ISaveCharacterModel {
  userID: number;
  characters: ICharacterMarvelModel[];
}
export interface ICharacterState {
  characters: ICharacterMarvelModel[];
  count: number;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: any;
}

const initialState: ICharacterState = {
  characters: [],
  count: 0,
  isLoading: true,
  isSuccess: false,
  errorMessage: undefined,
};

const API_URL = "/api/character";

// export const getEntitiesForMarvelAPI = createAsyncThunk(
//   "character/fetch_list",
//   async (values: IQueryParamsCharacter) => {
//     const requestUrl = `${apiUrl}/findAllFromMarvelApi`;
//     // ${
//     //   values.sort &&
//     //   `page=${values.page}&size=${values.size}&sort=${values.sort}`
//     // }`;

//     return await axiosInstance.get<ICharacterModel[]>(requestUrl);
//   }
// );

export const getEntitiesByUser = createAsyncThunk(
  "character/fetch_list_by_user",
  async (values: IQueryParamsCharacter) => {
    const requestUrl = `${API_URL}/findAllByUser?user=${values.userId}`;
    return (await axiosInstance.get<ICharacterMarvelModel[]>(requestUrl)).data;
  }
);

export const saveCharacters = createAsyncThunk(
  "character/save_entity",
  async (data: any) => {
    return await axiosInstance.post<ICharacterMarvelModel[]>(
      `${API_URL}/save?userId=${data.userID}`,
      data.characters
    );
  }
);

export const CharacterSlice = createSlice({
  name: "character",
  initialState: initialState,
  reducers: {
    setCharacters: (state, actions) => {
      state.characters.push(actions.payload);
      state.count = state.characters.length;
    },
    deleteCharacters: (state, actions) => {
      state.characters = state.characters.filter(
        (character) => character.marvelId !== actions.payload.marvelId
      );
      state.count = state.characters.length;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isPending(getEntitiesByUser), (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addMatcher(isFulfilled(getEntitiesByUser), (state, action) => {
      state.isLoading = false;
      state.errorMessage = null;
      state.characters = action.payload;
    });
    builder.addMatcher(isRejected(getEntitiesByUser), (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message || "Se produjo un error";
      state.characters = [];
    });
  },
});

export const { setCharacters, deleteCharacters } = CharacterSlice.actions;
export default CharacterSlice.reducer;
