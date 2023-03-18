import axiosClient from '@config/axios/axios.config';
import { GetBlogResponse } from './interfaces/getBlogResponse.interface';
export const fetchBlog = async ({ limit = 8, page = 1 }: { limit?: number; page?: number }) => {
    return new Promise<GetBlogResponse>(async (resolve, reject) => {
        try {
            const result = await axiosClient.get('/blogs', { params: { limit, page } });
            resolve(result as unknown as GetBlogResponse);
        } catch (error) {
            reject(error);
        }
    });
};
