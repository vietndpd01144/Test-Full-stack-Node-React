export interface SignUpDataForm {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export interface LoginDataForm {
  email: string;
  password: string;
}

export interface UserInformation {
  id: string;
  name: string;
}
