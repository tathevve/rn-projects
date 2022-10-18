export interface IUser {
  email: string;
  password: string;
  name: string;
}

export interface IRegisterUser {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  surname: string;
}
