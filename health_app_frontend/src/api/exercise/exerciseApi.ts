import axiosClient from '@config/axios/axios.config';
import { GetExerciseResponse } from './interfaces/getExerciseResponse.interface';
export const fetchExercises = async ({ limit = 8, page = 1 }: { limit?: number; page?: number }) => {
    return new Promise<GetExerciseResponse>(async (resolve, reject) => {
        try {
            const result = await axiosClient.get('/exercise', { params: { limit, page } });
            resolve(result as unknown as GetExerciseResponse);
        } catch (error) {
            reject(error);
        }
    });
};
