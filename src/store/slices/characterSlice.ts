import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axios-interceptor";
import {
  ICharacterMarvelModel,
  ICharacterModel,
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

const URL = "/api/character";

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

// export const getEntitiesByUser = createAsyncThunk(
//   "character/fetch_list",
//   async (values: IQueryParamsCharacter) => {
//     const requestUrl = `${apiUrl}/findAllByUser?user=${values.userId}`;
//     // ${
//     //   values.sort &&
//     //   `page=${values.page}&size=${values.size}&sort=${values.sort}`
//     // }`;

//     return await axiosInstance.get<ICharacterModel[]>(requestUrl);
//   }
// );

export const saveCharacters = createAsyncThunk(
  "character/save_entity",
  async (data: any) => {
    return await axiosInstance.post<ICharacterModel>(
      `${URL}/save?userId=${data.userID}`,
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
    builder.addMatcher(isPending(saveCharacters), (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addMatcher(isFulfilled(saveCharacters), (state) => {
      state.isLoading = false;
      state.errorMessage = null;
    });
    builder.addMatcher(isRejected(saveCharacters), (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message || "Se produjo un error";
    });
  },
});

export const { setCharacters, deleteCharacters } = CharacterSlice.actions;
export default CharacterSlice.reducer;
