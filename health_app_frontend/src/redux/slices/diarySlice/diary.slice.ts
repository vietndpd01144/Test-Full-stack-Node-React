import { Diary } from './../../../api/diary/interfaces/diary.interface';
import { Status } from '@config/enum/status';
import { createSlice } from '@reduxjs/toolkit';
interface DiaryState {
    diaries: Diary[];
    fetchDiaryStatus: Status;
    loadMoreStatus: Status;
}

const initialState: DiaryState = {
    diaries: [
        {
            id: 'diary_1',
            title: '私の日記の記録が一部表示されます。',

            content:
                'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
            createAt: 1679065865202
        },
        {
            id: 'diary_2',
            title: '私の日記の記録が一部表示されます。',
            content:
                'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
            createAt: 1679065865202
        },
        {
            id: 'diary_3',
            title: '私の日記の記録が一部表示されます。',
            content:
                'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
            createAt: 1679065865202
        },
        {
            id: 'diary_4',
            title: '私の日記の記録が一部表示されます。',
            content:
                'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
            createAt: 1679065865202
        },
        {
            id: 'diary_5',
            title: '私の日記の記録が一部表示されます。',
            content:
                'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
            createAt: 1679065865202
        },
        {
            id: 'diary_6',
            title: '私の日記の記録が一部表示されます。',
            content:
                'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
            createAt: 1679065865202
        },
        {
            id: 'diary_7',
            title: '私の日記の記録が一部表示されます。',
            content:
                'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
            createAt: 1679065865202
        },
        {
            id: 'diary_8',
            title: '私の日記の記録が一部表示されます。',
            content:
                'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
            createAt: 1679065865202
        }
    ],
    fetchDiaryStatus: Status.INITIAL,
    loadMoreStatus: Status.INITIAL
};

const diarySlicer = createSlice({
    name: 'diary',
    reducers: {},
    initialState
});

export const diaryReducer = diarySlicer.reducer;
