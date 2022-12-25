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
  characterEntity: ICharacterModel;
}

export const defaultValue: Readonly<ICharacterModel> = {};
