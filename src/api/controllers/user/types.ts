export interface User {
  id: string;
  name: string;
  email: string;
  label: string;
}

export interface GetAllResponse {
  status: string;
  data: User[];
}
