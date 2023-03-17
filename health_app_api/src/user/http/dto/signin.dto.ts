import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { Password } from '../validate/password.validate';
import { Transform, TransformFnParams } from 'class-transformer';
export class SignInDto {
    @IsNotEmpty()
    @IsEmail()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    email: string;

    @IsString()
    @Password()
    @IsNotEmpty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    password: string;
}
