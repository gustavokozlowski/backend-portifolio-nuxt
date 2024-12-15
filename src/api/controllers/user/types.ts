export interface User {
  id: string;
  name: string;
  label: string;
  comment: string;
}

export interface GetAllResponse {
  status: string;
  data: User[];
}
