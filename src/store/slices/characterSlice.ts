import { createSlice } from "@reduxjs/toolkit";
export interface CharacterState {
  characters: number[];
  count: number;
}

const initialState: CharacterState = {
  characters: [],
  count: 0,
};

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
        (character) => character !== actions.payload
      );
      state.count = state.characters.length;
    },
  },
});

export const { setCharacters, deleteCharacters } = CharacterSlice.actions;
export default CharacterSlice.reducer;
