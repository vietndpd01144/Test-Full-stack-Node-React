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

    async statisticalBodyRecordWithMonth(id: string) {
        const now = new Date();
        const prev = new Date(`${now.getMonth() + 1} 01 ${now.getFullYear() - 1}`);
        const result = await this.bodyRecordModel.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: prev
                    },
                    owner: id
                }
            },
            {
                $project: {
                    month: { $month: '$createdAt' },
                    weight: '$weight',
                    fatPercentage: '$fat_percentage',
                    value: 1
                }
            },

            {
                $group: {
                    _id: '$month',
                    weight: { $avg: '$weight' },
                    fatPercentage: { $avg: '$fatPercentage' }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ]);
        let keys = ['1月', '2月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        keys = [...keys.slice(now.getMonth() + 2), ...keys.slice(0, now.getMonth() + 2)];
        let statistical = {};
        keys.forEach((key) => {
            statistical = { ...statistical, [key]: [null, null] };
        });
        result.map((item) => {
            {
                statistical = { ...statistical, [`${item['_id']}月`]: [item['weight'], item['fatPercentage']] };
            }
        });

        return statistical;
    }
    async statisticalBodyRecordWithYear(id: string) {
        const now = new Date();
        const prev = new Date(`${now.getMonth() + 1} 01 ${now.getFullYear() - 10}`);
        const result = await this.bodyRecordModel.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: prev
                    },
                    owner: id
                }
            },
            {
                $project: {
                    year: { $year: '$createdAt' },
                    weight: '$weight',
                    fatPercentage: '$fat_percentage',
                    value: 1
                }
            },

            {
                $group: {
                    _id: '$year',
                    weight: { $avg: '$weight' },
                    fatPercentage: { $avg: '$fatPercentage' }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ]);
        let keys = [];
        for (let i = 11; i >= 0; i--) {
            keys.push(now.getFullYear() - i);
        }
        let statistical = {};
        keys.forEach((key) => {
            statistical = { ...statistical, [key]: [null, null] };
        });
        result.map((item) => {
            {
                statistical = { ...statistical, [`${item['_id']}`]: [item['weight'], item['fatPercentage']] };
            }
        });

        return statistical;
    }
    async statisticalBodyRecordWithDay(id: string) {
        const now = new Date();
        const prev = new Date(`${now.getMonth() + 1} ${now.getDate() - 10} ${now.getFullYear()}`);
        const result = await this.bodyRecordModel.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: prev
                    },
                    owner: id
                }
            },
            {
                $project: {
                    day: { $dayOfMonth: '$createdAt' },
                    month: { $month: '$createdAt' },
                    weight: '$weight',
                    fatPercentage: '$fat_percentage',
                    value: 1
                }
            },

            {
                $group: {
                    _id: ['$day', '$month'],
                    weight: { $avg: '$weight' },
                    fatPercentage: { $avg: '$fatPercentage' }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ]);
        let keys = [];
        for (let i = 10; i >= 0; i--) {
            const date = new Date(now.getTime() - 1000 * 60 * 60 * 24 * i);
            keys.push(`${date.getDate()}/${date.getMonth() + 1}`);
        }
        let statistical = {};
        keys.forEach((key) => {
            statistical = { ...statistical, [key]: [null, null] };
        });
        result.map((item) => {
            {
                statistical = {
                    ...statistical,
                    [`${item['_id'][0]}/${item['_id'][1]}`]: [item['weight'], item['fatPercentage']]
                };
            }
        });
        return statistical;
    }
}
