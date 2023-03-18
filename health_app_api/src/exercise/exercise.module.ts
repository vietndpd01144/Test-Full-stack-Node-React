import { Exercise, ExerciseSchema } from './schemas/exercise.schema';
import { ExerciseService } from './services/exercise.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExerciseController } from './http/controller/exercise.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ExerciseRepository } from './repositories/exercise.repository';

@Module({
    controllers: [ExerciseController],
    providers: [ExerciseService, ExerciseRepository],
    imports: [
        MongooseModule.forFeature([
            {
                name: Exercise.name,
                schema: ExerciseSchema
            }
        ])
    ]
})
export class ExerciseModule {}
