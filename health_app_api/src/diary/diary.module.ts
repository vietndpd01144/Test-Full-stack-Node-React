import { DiaryService } from './services/diary.service';
import { Diary, DiarySchema } from './schemas/diary.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DiaryController } from './http/controller/diary.controller';
import { Module } from '@nestjs/common';
import { DiaryRepository } from './repositories/diary.repository';

@Module({
    controllers: [DiaryController],
    providers: [DiaryService, DiaryRepository],
    imports: [
        MongooseModule.forFeature([
            {
                name: Diary.name,
                schema: DiarySchema
            }
        ])
    ]
})
export class DiaryModule {}
