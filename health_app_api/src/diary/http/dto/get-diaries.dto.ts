import { Transform, TransformFnParams } from 'class-transformer';
import { IsNumber, Min, IsString, ValidateIf, IsEnum } from 'class-validator';
import { FoodType } from 'src/food/enums/food-type.enum';
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
