import { GetExerciseDto } from '../http/dto/get-exersice.dto';
import { UserInformation } from '../../user/interface/user.interface';
import { ExerciseRepository } from '../repositories/exercise.repository';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class ExerciseService {
    constructor(private exerciseRepo: ExerciseRepository) {}

    async getExercises(user: UserInformation, query: GetExerciseDto) {
        const response = await this.exerciseRepo.getExercise(user.id, query.limit, query.page);
        return { data: response, message: 'Get exercise successfully' };
    }
}
