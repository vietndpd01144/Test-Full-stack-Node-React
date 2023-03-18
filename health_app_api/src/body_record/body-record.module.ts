import { BodyRecord, BodyRecordSchema } from './schemas/body-record.shema';
import { MongooseModule } from '@nestjs/mongoose';
import { BodyRecordRepository } from './repositoies/body-record.repository';
import { BodyRecordService } from './services/body-record.service';
import { BodyRecordController } from './http/controllers/body-record.controller';
import { Module } from '@nestjs/common';

@Module({
    providers: [BodyRecordService, BodyRecordRepository],
    controllers: [BodyRecordController],
    imports: [
        MongooseModule.forFeature([
            {
                name: BodyRecord.name,
                schema: BodyRecordSchema
            }
        ])
    ]
})
export class BodyRecordModule {}
