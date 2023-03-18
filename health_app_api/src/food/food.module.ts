import { FoodService } from './services/food.service';
import { Food, FoodSchema } from './schemas/food.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodController } from './http/controller/food.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { FoodRepository } from './repositories/food.repository';

@Module({
    controllers: [FoodController],
    providers: [FoodService, FoodRepository],
    imports: [
        MongooseModule.forFeature([
            {
                name: Food.name,
                schema: FoodSchema
            }
        ])
    ]
})
export class FoodModule {}
