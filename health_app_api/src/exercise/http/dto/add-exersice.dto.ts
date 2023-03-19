import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
export class AddExerciseDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @Transform(({ value }: TransformFnParams) => Number.parseInt(value))
    @IsNumber()
    @Min(1)
    @IsNotEmpty()
    calorie: number;

    @Transform(({ value }: TransformFnParams) => Number.parseInt(value))
    @IsNumber()
    @Min(1)
    @IsNotEmpty()
    time: number;
}
