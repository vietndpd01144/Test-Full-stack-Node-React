import { GetDiaryDto } from './../dto/get-diaries.dto';
import { DiaryService } from './../../services/diary.service';
import { JwtAuthGuard } from '../../../user/guards/jwt-auth.guard';
import { CurrentUser } from '../../../user/decorators/current-user.decorator';
import { Get, Post, Query, UseGuards } from '@nestjs/common';

import { Controller } from '@nestjs/common';
import { UserInformation } from 'src/user/interface/user.interface';

@UseGuards(JwtAuthGuard)
@Controller('diary')
export class DiaryController {
    constructor(private readonly diaryService: DiaryService) {}

    @Get('')
    async index(@Query() query: GetDiaryDto, @CurrentUser() user: UserInformation) {
        return this.diaryService.getDiary(user, query);
    }

    @Post()
    async addDiary() {}
}
