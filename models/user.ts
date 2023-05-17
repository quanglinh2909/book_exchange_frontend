export interface UserLoginPayload {
  email: string;
  password: string;
}

export interface UserRegisterPayload {
  email: string;
  password: string;
  phone: string;
  name: string;
}
export interface UserModel {
  id: string;
  name: string;
  phone: string;
  address: string;
  birthday: string;
  email: string;
  password: string;
  role: string;
  status: string;
  follows: Array<any>;
}
