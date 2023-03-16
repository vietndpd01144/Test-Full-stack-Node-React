import { SignInDto } from '../dto/signin.dto';
import { AuthService } from './../../services/auth.service';
import { SignupDto } from './../dto/signup.dto';
import { Body, Controller, Post, Get } from '@nestjs/common';
import { request } from 'http';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('sign-in')
  async login(@Body() body: SignInDto) {
    return this.authService.signIn(body);
  }

  @Post('sign-up')
  async signIn(@Body() body: SignupDto) {
    return this.authService.signup(body);
  }
}
