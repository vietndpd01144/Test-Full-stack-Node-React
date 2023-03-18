import { Diary } from './diary.interface';

export interface GetDiariesResponse {
    data: {
        diaries: Diary[];
        totalRecord: number;
    };
    message: string;
}
