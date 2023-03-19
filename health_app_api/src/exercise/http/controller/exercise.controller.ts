import { AddExerciseDto } from './../dto/add-exersice.dto';
import { AddDiaryDto } from './../../../diary/http/dto/add-diary.dto';
import { GetExerciseDto } from '../dto/get-exersice.dto';
import { ExerciseService } from '../../services/exercise.service';
import { JwtAuthGuard } from '../../../user/guards/jwt-auth.guard';
import { CurrentUser } from '../../../user/decorators/current-user.decorator';
import { Body, Get, Post, Query, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserInformation } from 'src/user/interface/user.interface';

@UseGuards(JwtAuthGuard)
@Controller('exercise')
export class ExerciseController {
    constructor(private readonly exerciseService: ExerciseService) {}

    @Get('')
    async index(@Query() query: GetExerciseDto, @CurrentUser() user: UserInformation) {
        return this.exerciseService.getExercises(user, query);
    }

    @Post('')
    async addExercise(@Body() data: AddExerciseDto, @CurrentUser() user: UserInformation) {
        return this.exerciseService.addExercises(user, data);
    }
}
