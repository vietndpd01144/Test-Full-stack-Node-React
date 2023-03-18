import { BaseResponse } from 'src/core/interface/base-response';
import { UserInformation } from './user.interface';

export interface LoginResponse extends BaseResponse {
    data: {
        user: UserInformation;
        token: string;
        refreshToken: string;
    };
}
