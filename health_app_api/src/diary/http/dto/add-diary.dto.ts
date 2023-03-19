import { IsNotEmpty, IsString } from 'class-validator';
export class AddDiaryDto {
    @IsNotEmpty()
    @IsString()
    title: string;
    @IsNotEmpty()
    @IsString()
    description: string;
}
