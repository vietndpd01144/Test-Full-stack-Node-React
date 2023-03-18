import { Exercise } from '@api/exercise/interfaces/exercise.interface';
export interface GetExerciseResponse {
    data: {
        exercises: Exercise[];
        totalRecord: number;
    };
    message: string;
}
