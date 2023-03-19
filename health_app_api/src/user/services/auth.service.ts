import { SignInDto } from './../http/dto/signin.dto';
import { env } from './../../config/env.config';
import { UserRepository } from './../repositoies/user.repository';
import { SignupDto } from './../http/dto/signup.dto';
import { CACHE_MANAGER, HttpStatus, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Cache } from 'cache-manager';
import { LoginResponse } from '../interface/login-respose.interface';
import { JwtService } from '@nestjs/jwt';
import moment from 'moment';
@Injectable()
export class AuthService {
    constructor(
        private userRepo: UserRepository,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private jwtService: JwtService
    ) {}

    async signup(signup: SignupDto) {
        await this.userRepo.isEmailUnique(signup.email);
        const hashedPassword = await bcrypt.hash(signup.password, env.SALT_ROUND);
        await this.userRepo.saveUser(signup.email, signup.name, hashedPassword);
        return {
            statusCode: HttpStatus.OK,
            message: 'Sing up successfully.'
        };
    }

    async signOut(token: string) {
        const tokenExpireAt = ((await this.jwtService.decode(token)) as any).exp;
        const blacklistTtl = tokenExpireAt - Date.now() / 1000;

        console.log(blacklistTtl);

        this.cacheManager.set(token, 1, 10000000000);
        return {
            statusCode: HttpStatus.OK
        };
    }

    async signIn(signInDto: SignInDto) {
        let user = await this.userRepo.findOneByEmail(signInDto.email, ['_id', 'email', 'password', 'name']);
        console.log(user);
        if (!user || !user.password || !bcrypt.compareSync(signInDto.password, user.password)) {
            throw new UnauthorizedException({
                statusCode: HttpStatus.UNAUTHORIZED,
                message: 'email or password wrong'
            });
        }
        return await this.createLoginResponse(user.email, user.name, user._id.toHexString());
    }

    private async createLoginResponse(email: string, name: string, id: string): Promise<LoginResponse> {
        const accessToken = this.jwtService.sign(
            { id: id, email: email },
            { secret: env.JWT.JWT_SECRET, expiresIn: env.JWT.JWT_EXPIRE }
        );
        const refreshToken = this.jwtService.sign(
            { id: id, email: email },
            { secret: env.JWT.JWT_REFRESH_EXPIRE, expiresIn: env.JWT.JWT_REFRESH_EXPIRE }
        );
        return {
            data: {
                user: { id, email, name },
                refreshToken: refreshToken,
                token: accessToken
            },
            message: 'Sign in successfully.'
        };
    }
}
