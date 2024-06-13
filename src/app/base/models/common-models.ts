export enum UserRoleEnum {
  Admin = 'Admin',
  User = 'User',
}

export interface IUserContext {
  id: string;
  role: UserRoleEnum;
  username: string;
}