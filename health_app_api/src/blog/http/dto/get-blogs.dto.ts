import { Transform, TransformFnParams } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';
import { FoodType } from 'src/food/enums/food-type.enum';
export class GetBlogsDto {
    @Transform(({ value }: TransformFnParams) => Number.parseInt(value))
    @IsNumber()
    @Min(1)
    limit: number;

    @Transform(({ value }: TransformFnParams) => Number.parseInt(value))
    @IsNumber()
    @Min(1)
    page: number;
}
