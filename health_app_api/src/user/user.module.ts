import { env } from './../config/env.config';
import { UserRepository } from './repositoies/user.repository';
import { User, UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './http/controllers/auth.controller';
import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    providers: [AuthService, UserRepository],
    controllers: [AuthController],
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema
            }
        ]),
        JwtModule.register({
            secret: env.JWT.JWT_SECRET,
            signOptions: {
                expiresIn: env.JWT.JWT_EXPIRE,
                algorithm: 'HS512'
            }
        })
    ]
})
export class UserModule {}
