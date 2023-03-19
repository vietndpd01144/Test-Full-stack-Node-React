import { SignUpDataForm } from './../../redux/slices/userSlice/interface';
import { SignInResponse } from '@api/user/interfaces/signInResponse.interface';
import axiosClient from '@config/axios/axios.config';
import { LoginDataForm } from '@redux/slices/userSlice/interface';
import { SignUpResponse } from './interfaces/signUpResponse.interface';

export const signInApi = async (parameter: LoginDataForm) => {
    return new Promise<SignInResponse>(async (resolve, reject) => {
        try {
            const response = await axiosClient.post('/auth/sign-in', {
                ...parameter
            });
            resolve(response as unknown as SignInResponse);
        } catch (error) {
            reject(error);
        }
    });
};

export const signUpApi = async (parameter: SignUpDataForm) => {
    return new Promise<SignUpResponse>(async (resolve, reject) => {
        try {
            const response = await axiosClient.post('/auth/sign-up', {
                ...parameter
            });
            resolve(response as unknown as SignUpResponse);
        } catch (error) {
            reject(error);
        }
    });
};

export const signOutApi = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosClient.delete('/auth/sign-out');

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};
