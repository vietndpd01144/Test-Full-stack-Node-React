import { JwtAuthGuard } from './../../../user/guards/jwt-auth.guard';
import { CurrentUser } from './../../../user/decorators/current-user.decorator';
import { Get, Post, Query, UseGuards } from '@nestjs/common';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller } from '@nestjs/common';
import { GetHistoryFoodDto } from '../dto/get-history-food.dto';
import { FoodService } from 'src/food/services/food.service';
import { UserInformation } from 'src/user/interface/user.interface';

@UseGuards(JwtAuthGuard)
@Controller('food')
export class FoodController {
    constructor(private readonly foodService: FoodService) {}

    @Post()
    async addFood(){
        
    }

    @Get('history')
    async getHistoryFoods(@Query() query: GetHistoryFoodDto, @CurrentUser() user: UserInformation) {
        return this.foodService.getHistory(user, query);
    }
}
