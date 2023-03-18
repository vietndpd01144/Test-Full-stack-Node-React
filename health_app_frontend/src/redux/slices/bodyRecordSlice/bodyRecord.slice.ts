import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
const bodyRecordSlicer = createSlice({
    name: 'body-record',
    reducers: {},
    initialState
});

export const bodyRecordReducer = bodyRecordSlicer.reducer;
