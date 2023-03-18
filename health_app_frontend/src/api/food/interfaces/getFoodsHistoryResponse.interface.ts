import { Food } from './food.interface';

export interface GetHistoryFoodResponse {
    data: {
        foods: Food[];
        totalRecord: number;
    };
    message: string;
}
