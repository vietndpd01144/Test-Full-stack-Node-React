import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { Password } from '../validate/password.validate';
export class SignInDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @Password()
  @IsNotEmpty()
  password: string;
}
