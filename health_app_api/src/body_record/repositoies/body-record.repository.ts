import { BodyRecord, BodyRecordDocument } from './../schemas/body-record.shema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
@Injectable()
export class BodyRecordRepository {
    constructor(@InjectModel(BodyRecord.name) private bodyRecordModel: Model<BodyRecordDocument>) {}

    async saveRecord(weight: number, fat_percentage: number, owner: string) {
        return new this.bodyRecordModel({ fat_percentage, weight, owner }).save();
    }

    async statisticalBodyRecordWithYear(id: string) {
        // const re = await this.bodyRecordModel.aggregate([
        //     {
        //         $match: { owner: new Types.ObjectId(id) }
        //     },
        //     {
        //     }
        // ]);
        // console.log(re);
    }
}
