import { BaseResponse } from 'src/core/interface/base-response';

export interface LoginResponse extends BaseResponse {
    data: {
        user: {
            id: string;
            name: string;
            email: string;
        };
        token: string;
        refreshToken: string;
    };
}
