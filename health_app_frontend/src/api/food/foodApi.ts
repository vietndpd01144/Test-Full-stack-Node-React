import axiosClient from '@config/axios/axios.config';
import { GetHistoryFoodResponse } from './interfaces/getFoodsHistoryResponse.interface';

export const getHistoryFood = ({
    limit = 8,
    page = 1,
    type
}: {
    limit?: number;
    page?: number;
    type?: 'MORNING' | 'LUNCH' | 'DINNER' | 'SNACK';
}) => {
    return new Promise<GetHistoryFoodResponse>(async (resolve, reject) => {
        try {
            const result = await axiosClient.get('food/history', {
                params: {
                    limit,
                    page,
                    type
                }
            });
            resolve(result as unknown as GetHistoryFoodResponse);
        } catch (err) {
            reject(err);
        }
    });
};
