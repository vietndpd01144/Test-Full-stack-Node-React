import { UserInformation } from "@redux/slices/userSlice/interface";

export interface SignInResponse {
  data: {
    user: UserInformation;
    token: string;
    refreshToken: string;
  };
  message: string;
}

export interface SignInError {
  response: {
    data: {
      statusCode: number;
      messages?: string[];
      message?: string;
    };
  };
}
