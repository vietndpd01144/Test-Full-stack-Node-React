import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Password } from '../validate/password.validate';
import { Transform, TransformFnParams } from 'class-transformer';

export class SignupDto {
    @IsNotEmpty()
    @IsEmail()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    email: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(40)
    @Password()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    password: string;
}
