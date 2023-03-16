import { BaseResponse } from './../../../dist/core/interface/base-response.d';
export interface LoginResponse extends BaseResponse {
    data: {
        user: {
            name: string;
            email: string;
        };
        token: string;
        refreshToken: string;
    };
}
