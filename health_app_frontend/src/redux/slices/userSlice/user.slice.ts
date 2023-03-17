import { SignInError } from "./../../../api/user/interfaces/signInResponse.interface";
import { SignUpError } from "./../../../api/user/interfaces/signUpResponse.interface";
import { SignInResponse } from "@api/user/interfaces/signInResponse.interface";
import { Status } from "@config/enum/status";
import { signInApi, signUpApi } from "@api/user/useApi";
import { LoginDataForm, SignUpDataForm, UserInformation } from "./interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SignUpResponse } from "@api/user/interfaces/signUpResponse.interface";
import { toast } from "react-toastify";

interface UserStateType {
  user?: UserInformation;
  token?: string;
  refreshToken?: string;
  signUpStatus: Status;
  signInStatus: Status;
  message?: string;
}
const initialState: UserStateType = {
  signInStatus: Status.INITIAL,
  signUpStatus: Status.INITIAL,
};

export const signInAction = createAsyncThunk<
  SignInResponse,
  LoginDataForm,
  { rejectValue: SignInError }
>("/user/sign-in", async (payload, { rejectWithValue }) => {
  try {
    return await signInApi(payload);
  } catch (error) {
    return rejectWithValue(error as SignInError);
  }
});

export const signUpAction = createAsyncThunk<
  SignUpResponse,
  SignUpDataForm,
  { rejectValue: SignUpError }
>("/user/sign-up", async (payload, { rejectWithValue }) => {
  try {
    return await signUpApi(payload);
  } catch (error) {
    return rejectWithValue(error as SignUpError);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearStatus: (state) => {
      state.signInStatus = Status.INITIAL;
      state.signUpStatus = Status.INITIAL;
    },
  },
  extraReducers: (builder) => {
    //Sign in
    builder.addCase(signInAction.pending, (state, action) => {
      state.signInStatus = Status.LOADING;
    });
    builder.addCase(signInAction.rejected, (state, { payload }) => {
      const data = payload?.response.data;
      toast.error(
        data?.messages ? data?.messages[0] : data?.message ?? "Sign in fail."
      );
      state.signInStatus = Status.FAILED;
    });
    builder.addCase(signInAction.fulfilled, (state, action) => {
      toast.success("Sign in Successfully!");
      state.signInStatus = Status.SUCCESS;
      state.user = action.payload.data.user;
      state.refreshToken = action.payload.data.refreshToken;
      state.token = action.payload.data.token;
    });

    //Sign up

    builder.addCase(signUpAction.pending, (state, action) => {
      state.signUpStatus = Status.LOADING;
    });
    builder.addCase(signUpAction.rejected, (state, { payload }) => {
      const data = payload?.response.data;
      toast.error(
        data?.messages ? data?.messages[0] : data?.message ?? "Sign up fail."
      );
      state.signUpStatus = Status.FAILED;
    });
    builder.addCase(signUpAction.fulfilled, (state, action) => {
      toast.success("Sign up successful.");
      state.signUpStatus = Status.SUCCESS;
    });
  },
});

export const userReducer = userSlice.reducer;
export const { clearStatus } = userSlice.actions;
