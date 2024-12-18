export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface GetAllResponse {
  status: string;
  data: IUser[];
}
