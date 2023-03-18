import { BlogModule } from './blog/blog.module';
import { ExerciseModule } from './exercise/exercise.module';
import { DiaryModule } from './diary/diary.module';
import { FoodModule } from './food/food.module';
import { BodyRecordModule } from './body_record/body-record.module';
import { UserModule } from './user/user.module';
import { env } from './config/env.config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GlobalCacheModule } from './config/cache.config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

const environment = process.env.NODE_ENV || 'development';
@Module({
    imports: [
        FoodModule,
        ConfigModule.forRoot({
            envFilePath: `.env.${environment}`,
            isGlobal: true
        }),
        MongooseModule.forRoot(`mongodb://localhost:${env.DATABASE.DATABASE_PORT}/${env.DATABASE.DATABASE_NAME}`, {
            ignoreUndefined: true
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public')
        }),
        GlobalCacheModule,
        UserModule,
        BodyRecordModule,
        FoodModule,
        DiaryModule,
        ExerciseModule,
        BlogModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
