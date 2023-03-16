import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Password } from '../validate/password.validate';

export class SignupDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(40)
    @Password()
    password: string;
}
