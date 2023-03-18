import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Exercise, ExerciseDocument } from '../schemas/exercise.schema';
import { Model } from 'mongoose';
@Injectable()
export class ExerciseRepository {
    constructor(@InjectModel(Exercise.name) private exerciseModel: Model<ExerciseDocument>) {}

    async getExercise(id: string, limit?: number, page?: number) {
        return {
            exercises: await this.exerciseModel
                .find({ owner: id })
                .skip(page ? limit * (page - 1) : 0)
                .limit(limit ?? 8)
                .sort({ createdAt: -1 })
                .select(['_id', 'name', 'time', 'calories']),
            totalRecord: await this.exerciseModel.count({ owner: id })
        };
    }
}
