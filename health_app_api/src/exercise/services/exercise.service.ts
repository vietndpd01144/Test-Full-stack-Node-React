import { AddExerciseDto } from './../http/dto/add-exersice.dto';
import { GetExerciseDto } from '../http/dto/get-exersice.dto';
import { UserInformation } from '../../user/interface/user.interface';
import { ExerciseRepository } from '../repositories/exercise.repository';
import { Injectable, HttpStatus } from '@nestjs/common';

@Injectable()
export class ExerciseService {
    constructor(private exerciseRepo: ExerciseRepository) {}

    async getExercises(user: UserInformation, query: GetExerciseDto) {
        const response = await this.exerciseRepo.getExercise(user.id, query.limit, query.page);
        return {
            statusCode: HttpStatus.OK,
            data: response,
            message: 'Get exercise successfully'
        };
    }

    async addExercises(user: UserInformation, data: AddExerciseDto) {
        await this.exerciseRepo.addExercise(user.id, data.name, data.time, data.calorie);
        return {
            statusCode: HttpStatus.CREATED,
            message: 'Add exercise successfully'
        };
    }
}
