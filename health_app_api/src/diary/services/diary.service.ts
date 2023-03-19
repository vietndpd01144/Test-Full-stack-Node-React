import { AddDiaryDto } from './../http/dto/add-diary.dto';
import { GetDiaryDto } from '../http/dto/get-diaries.dto';
import { UserInformation } from '../../user/interface/user.interface';
import { DiaryRepository } from '../repositories/diary.repository';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, HttpStatus } from '@nestjs/common';

@Injectable()
export class DiaryService {
    constructor(private diaryRepo: DiaryRepository) {}

    async getDiary(user: UserInformation, query: GetDiaryDto) {
        const response = await this.diaryRepo.getDiary(user.id, query.limit, query.page);
        return {
            statusCode: HttpStatus.OK,
            data: response,
            message: 'Get  diaries successfully'
        };
    }

    async addDiary(data: AddDiaryDto, userId: string) {
        await this.diaryRepo.addDiary(data.title, data.description, userId);
        return {
            statusCode: HttpStatus.CREATED,
            message: 'Add diary successfully'
        };
    }
}
