import { Transform, TransformFnParams } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';
export class GetDiaryDto {
    @Transform(({ value }: TransformFnParams) => Number.parseInt(value))
    @IsNumber()
    @Min(1)
    limit: number;

    @Transform(({ value }: TransformFnParams) => Number.parseInt(value))
    @IsNumber()
    @Min(1)
    page: number;
}
