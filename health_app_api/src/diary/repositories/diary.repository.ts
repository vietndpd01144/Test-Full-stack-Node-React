import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Diary, DiaryDocument } from '../schemas/diary.schema';
import { Model } from 'mongoose';
@Injectable()
export class DiaryRepository {
    constructor(@InjectModel(Diary.name) private diaryModel: Model<DiaryDocument>) {}

    async getDiary(id: string, limit?: number, page?: number) {
        return {
            diaries: await this.diaryModel
                .find({ owner: id })
                .skip(page ? limit * (page - 1) : 0)
                .limit(limit ?? 8)
                .sort({ createdAt: -1 })
                .select(['_id', 'title', 'description', 'createdAt']),
            totalRecord: await this.diaryModel.count({ owner: id })
        };
    }
}
