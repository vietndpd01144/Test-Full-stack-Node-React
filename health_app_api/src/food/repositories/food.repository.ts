import { Type } from './../../../node_modules/@nestjs/passport/dist/interfaces/type.interface.d';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Food, FoodDocument } from './../schemas/food.schema';
import { Model } from 'mongoose';
import { FoodType } from '../enums/food-type.enum';
@Injectable()
export class FoodRepository {
    constructor(@InjectModel(Food.name) private foodModel: Model<FoodDocument>) {}

    async getHistoryFood(id: string, type?: FoodType, limit?: number, page?: number) {
        return {
            foods: await this.foodModel
                .find({ owner: id, type: type })
                .skip(page ? limit * (page - 1) : 0)
                .limit(limit ?? 8)
                .sort({ createdAt: -1 })
                .select(['_id' as 'id', 'owner', 'type', 'image', 'createdAt']),
            totalRecord: await this.foodModel.count({ owner: id, type: type })
        };
    }
}
