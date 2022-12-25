export interface ICharacterModel {
  id?: number | null;
  name?: string | null;
  description?: string | null;
  modified?: string | null;
  thumbnail?: string | null;
  marvelId?: string | null;
}

export interface IQueryParamsCharacter {
  query?: string;
  page?: number;
  size?: number;
  sort?: string;
  id?: number;
  userId?: number;
}

export const defaultValue: Readonly<ICharacterModel> = {};
