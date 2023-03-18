import { StatisticalEnumType } from './../enums/enum_statistical';
import { BodyRecordRepository } from './../repositoies/body-record.repository';
import { AddBodyRecordDto } from './../http/dto/add-body-record.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BodyRecordService {
    constructor(private bodyRecordRepo: BodyRecordRepository) {}

    async addBodyRecord(record: AddBodyRecordDto, use: string) {
        const result = await this.bodyRecordRepo.saveRecord(record.weight, record.fat_percentage, use);
        return {
            message: 'Add record successfully',
            data: { id: result._id, weight: result.weight, fat_percentage: result.fat_percentage }
        };
    }

    async statistical(id: string, type: StatisticalEnumType) {
        if (type === StatisticalEnumType.year) {
            this.bodyRecordRepo.statisticalBodyRecordWithYear(id);
        }
    }
}
