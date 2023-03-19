import { ExtractJwt } from 'passport-jwt';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { SignInDto } from '../dto/signin.dto';
import { AuthService } from './../../services/auth.service';
import { SignupDto } from './../dto/signup.dto';
import { Body, Controller, Post, Get, UseGuards, Request, Delete } from '@nestjs/common';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('sign-in')
    async login(@Body() body: SignInDto) {
        return this.authService.signIn(body);
    }

    @Delete('sign-out')
    @UseGuards(JwtAuthGuard)
    async signOut(@Request() request) {
        const token = ExtractJwt.fromAuthHeaderAsBearerToken()(request);
        return this.authService.signOut(token);
    }

    @Post('sign-up')
    async signIn(@Body() body: SignupDto) {
        return this.authService.signup(body);
    }
}
