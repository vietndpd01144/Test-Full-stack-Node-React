import { toast } from 'react-toastify';
import { AddBodyRecordDataForm } from './interfaces';
import { StatisticalBodyRecordResponse } from './../../../api/bodyRecord/interfaces/statistical-body-record.interface';
import { RootState } from '@redux/store';
import { Status } from '@config/enum/status';
import { statisticalRecord, addRecord } from './../../../api/bodyRecord/bodyRecordApi';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export type BoyRecordStatisticalType = 'DAY' | 'MONTH' | 'YEAR';

interface BodyRecordState {
    dataForChart?: object;
    loadChartStatus: Status;
    addBodyRecordStatus: Status;
    type: BoyRecordStatisticalType;
}

const initialState: BodyRecordState = {
    loadChartStatus: Status.INITIAL,
    addBodyRecordStatus: Status.INITIAL,
    type: 'MONTH'
};

export const statisticalBodyRecordAction = createAsyncThunk<
    StatisticalBodyRecordResponse | undefined,
    BoyRecordStatisticalType | undefined
>('body-record/statistical', async (payload, { rejectWithValue, getState }) => {
    try {
        const { bodyRecord } = getState() as RootState;
        return await statisticalRecord(bodyRecord.type);
    } catch (error) {
        rejectWithValue(error);
    }
});

export const addBodyRecordAction = createAsyncThunk<any, AddBodyRecordDataForm>('body-record/add', (payload) => {
    return addRecord(payload);
});

const bodyRecordSlicer = createSlice({
    name: 'body-record',
    reducers: {
        clearStatus: (state) => {
            state.addBodyRecordStatus = Status.INITIAL;
        }
    },
    initialState,
    extraReducers(builder) {
        builder.addCase(statisticalBodyRecordAction.pending, (state, { meta }) => {
            if (meta.arg) {
                state.type = meta.arg;
            } else {
                state.type = 'MONTH';
            }

            state.loadChartStatus = Status.LOADING;
        });
        builder.addCase(statisticalBodyRecordAction.fulfilled, (state, { payload }) => {
            state.loadChartStatus = Status.SUCCESS;
            state.dataForChart = payload?.data.statistical;
        });

        builder.addCase(addBodyRecordAction.pending, (state) => {
            state.addBodyRecordStatus = Status.LOADING;
        });

        builder.addCase(addBodyRecordAction.fulfilled, (state) => {
            toast.success('Added body record successfully.');
            state.addBodyRecordStatus = Status.SUCCESS;
        });
        builder.addCase(addBodyRecordAction.rejected, (state) => {
            state.addBodyRecordStatus = Status.FAILED;
        });
    }
});

export const bodyRecordReducer = bodyRecordSlicer.reducer;
