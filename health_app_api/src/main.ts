import { ValidateException } from './core/validate/validate.exception';
import { env } from './config/env.config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('api');
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            stopAtFirstError: true,
            exceptionFactory: (errors) => new ValidateException(errors)
        })
    );
    app.enableCors({
        origin: (requestOrigin, callback) => {
            if (!requestOrigin) {
                return callback(null, true);
            }
            requestOrigin = requestOrigin.replace('https://', '').replace('http://', '');
            if (env.WHITELIST_DOMAINS.indexOf(requestOrigin) !== -1) {
                return callback(null, true);
            } else {
                return callback(new BadRequestException(`No CORS allowed. Origin: ${requestOrigin}`), false);
            }
        }
    });
    await app.listen(env.APP_PORT);
}
bootstrap();
