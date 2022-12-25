export interface IUserModel {
  id?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string | null;
}

export interface IQueryParamsUser {
  query?: string;
  page?: number;
  size?: number;
  sort?: string;
  id?: number;
}

export const defaultValue: Readonly<IUserModel> = {};
