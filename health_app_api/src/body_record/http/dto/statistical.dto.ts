import { StatisticalEnumType } from './../../enums/enum_statistical';
import { IsEnum, IsString } from 'class-validator';

export class BodyRecordStatisticalDto {
    @IsEnum(StatisticalEnumType)
    @IsString()
    type: StatisticalEnumType;
}
