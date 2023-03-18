import { BodyRecordService } from './../../services/body-record.service';
import { AddBodyRecordDto } from './../dto/add-body-record.dto';
import { UserInformation } from './../../../user/interface/user.interface';
import { Controller, Get, UseGuards, Post, Body, Param, Query } from '@nestjs/common';
import { CurrentUser } from 'src/user/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { BodyRecordStatisticalDto } from '../dto/statistical.dto';

@Controller('body-record')
@UseGuards(JwtAuthGuard)
export class BodyRecordController {
    constructor(private readonly bodyRecordService: BodyRecordService) {}

    @Post('')
    async addRecord(@CurrentUser() user: UserInformation, @Body() record: AddBodyRecordDto) {
        return this.bodyRecordService.addBodyRecord(record, user.id);
    }

    @Get('statistical')
    async index(@CurrentUser() user: UserInformation, @Query() param: BodyRecordStatisticalDto) {
        return this.bodyRecordService.statistical(user.id, param.type);
    }
}
