import { toast } from 'react-toastify';
import { AddDiaryDataForm } from './interface';
import { RootState } from './../../store';
import { addDiary, fetchDiaries } from '@api/diary/diaryApi';
import { Diary } from './../../../api/diary/interfaces/diary.interface';
import { Status } from '@config/enum/status';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
interface DiaryState {
    diaries: Diary[];
    fetchDiaryStatus: Status;
    limit: number;
    page: number;
    totalCount: number;
    loadMoreStatus: Status;
    addDiaryStatus: Status;
}

const initialState: DiaryState = {
    diaries: [],
    fetchDiaryStatus: Status.INITIAL,
    loadMoreStatus: Status.INITIAL,
    addDiaryStatus: Status.INITIAL,
    totalCount: 0,
    limit: 8,
    page: 1
};

export const fetchDiariesAction = createAsyncThunk('diary/fetch-diaries', async (payload, { rejectWithValue }) => {
    try {
        return await fetchDiaries({});
    } catch (error) {
        rejectWithValue(error);
    }
});

export const addDiaryAction = createAsyncThunk<any, AddDiaryDataForm>(
    'diary/add-diary',
    async (payload, { rejectWithValue }) => {
        return await addDiary(payload);
    }
);

export const loadMoreDiariesAction = createAsyncThunk(
    'diary/load-more-diaries',
    async (payload, { rejectWithValue, getState }) => {
        try {
            const { diary } = getState() as RootState;

            return await fetchDiaries({ page: diary.page + 1 });
        } catch (error) {
            rejectWithValue(error);
        }
    }
);

const diarySlicer = createSlice({
    name: 'diary',
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchDiariesAction.pending, (state) => {
            state.fetchDiaryStatus = Status.LOADING;
        });
        builder.addCase(fetchDiariesAction.fulfilled, (state, { payload }) => {
            state.fetchDiaryStatus = Status.SUCCESS;
            state.diaries = payload?.data.diaries as Diary[];
            state.totalCount = payload?.data.totalRecord ?? 0;
        });
        builder.addCase(fetchDiariesAction.rejected, (state) => {
            state.fetchDiaryStatus = Status.FAILED;
        });

        builder.addCase(loadMoreDiariesAction.pending, (state) => {
            state.loadMoreStatus = Status.LOADING;
        });
        builder.addCase(loadMoreDiariesAction.fulfilled, (state, { payload }) => {
            state.loadMoreStatus = Status.SUCCESS;
            state.diaries = [...state.diaries, ...(payload?.data.diaries as Diary[])];
            state.page = state.page + 1;
        });
        builder.addCase(loadMoreDiariesAction.rejected, (state) => {
            state.loadMoreStatus = Status.FAILED;
        });

        builder.addCase(addDiaryAction.pending, (state) => {
            state.addDiaryStatus = Status.LOADING;
        });
        builder.addCase(addDiaryAction.fulfilled, (state, { payload }) => {
            toast.success('Add diary successfully');
            state.addDiaryStatus = Status.SUCCESS;
        });
        builder.addCase(addDiaryAction.rejected, (state) => {
            toast.error('Add diary fail');
            state.addDiaryStatus = Status.FAILED;
        });
    }
});

export const diaryReducer = diarySlicer.reducer;
