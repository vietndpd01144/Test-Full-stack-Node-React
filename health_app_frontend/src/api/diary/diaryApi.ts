import axiosClient from '@config/axios/axios.config';
import { GetDiariesResponse } from './interfaces/getDiariesRespose.interface';
export const fetchDiaries = async ({ limit = 8, page = 1 }: { limit?: number; page?: number }) => {
    return new Promise<GetDiariesResponse>(async (resolve, reject) => {
        try {
            const result = await axiosClient.get('/diary', { params: { limit, page } });
            resolve(result as unknown as GetDiariesResponse);
        } catch (error) {
            reject(error);
        }
    });
};
