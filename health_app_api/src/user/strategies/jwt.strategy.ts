import { UserInformation } from './../interface/user.interface';
import { env } from './../../config/env.config';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../services/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: env.JWT.JWT_SECRET
        });
    }

    async validate(payload: { id: string }): Promise<UserInformation> {
        const user = await this.userService.findUserNotFail(payload.id);
        if (!user) {
            throw new UnauthorizedException({ translate: 'error.unauthorized' });
        }
        return user;
    }
}
