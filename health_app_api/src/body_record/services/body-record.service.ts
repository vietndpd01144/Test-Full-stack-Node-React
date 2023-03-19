import { StatisticalEnumType } from './../enums/enum_statistical';
import { BodyRecordRepository } from './../repositoies/body-record.repository';
import { AddBodyRecordDto } from './../http/dto/add-body-record.dto';
import { Injectable, HttpStatus } from '@nestjs/common';

@Injectable()
export class BodyRecordService {
    constructor(private bodyRecordRepo: BodyRecordRepository) {}

    async addBodyRecord(record: AddBodyRecordDto, use: string) {
        const result = await this.bodyRecordRepo.saveRecord(record.weight, record.fat_percentage, use);
        return {
            statusCode: HttpStatus.CREATED,
            message: 'Add record successfully',
            data: { id: result._id, weight: result.weight, fat_percentage: result.fat_percentage }
        };
    }

    async statistical(id: string, type: StatisticalEnumType) {
        let statistical: object = {};
        if (type === StatisticalEnumType.month) {
            statistical = await this.bodyRecordRepo.statisticalBodyRecordWithMonth(id);
        } else if (type === StatisticalEnumType.year) {
            statistical = await this.bodyRecordRepo.statisticalBodyRecordWithYear(id);
        } else if (type === StatisticalEnumType.day) {
            statistical = await this.bodyRecordRepo.statisticalBodyRecordWithDay(id);
        }
        return {
            statusCode: HttpStatus.OK,
            data: { statistical }
        };
    }
}
