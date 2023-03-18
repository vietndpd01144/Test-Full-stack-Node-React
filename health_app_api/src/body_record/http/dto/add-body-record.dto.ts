import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';
export class AddBodyRecordDto {
    @Transform(({ value }: TransformFnParams) => Number.parseFloat(value))
    @IsNotEmpty()
    @IsNumber()
    weight: number;

    @Transform(({ value }: TransformFnParams) => Number.parseFloat(value))
    @IsNotEmpty()
    @IsNumber()
    fat_percentage: number;
}
