import { GetDiaryDto } from '../http/dto/get-diaries.dto';
import { UserInformation } from '../../user/interface/user.interface';
import { DiaryRepository } from '../repositories/diary.repository';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class DiaryService {
    constructor(private diaryRepo: DiaryRepository) {}

    async getDiary(user: UserInformation, query: GetDiaryDto) {
        const response = await this.diaryRepo.getDiary(user.id, query.limit, query.page);
        return { data: response, message: 'Get history food successfully' };
    }
}
