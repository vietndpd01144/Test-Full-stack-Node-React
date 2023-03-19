import { GetHistoryFoodDto } from './../http/dto/get-history-food.dto';
import { UserInformation } from './../../user/interface/user.interface';
import { FoodRepository } from './../repositories/food.repository';
import { Injectable, HttpStatus } from '@nestjs/common';

@Injectable()
export class FoodService {
    constructor(private foodRepo: FoodRepository) {}

    async getHistory(user: UserInformation, query: GetHistoryFoodDto) {
        const response = await this.foodRepo.getHistoryFood(user.id, query.type, query.limit, query.page);
        return {
            statusCode: HttpStatus.OK,
            data: response,
            message: 'Get history food successfully'
        };
    }
}
