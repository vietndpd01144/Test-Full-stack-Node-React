import { GetHistoryFoodResponse } from './../../../api/food/interfaces/getFoodsHistoryResponse.interface';
import { RootState } from './../../store';
import { getHistoryFood } from './../../../api/food/foodApi';
import { Status } from './../../../config/enum/status';
import { Food } from '@api/food/interfaces/food.interface';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export interface FoodState {
    foods: Food[];
    foodFetchStatus: Status;
    foodLoadMoreStatus: Status;
    historyLimit: number;
    historyPage: number;
    totalCount: number;
    typeFood?: 'MORNING' | 'LUNCH' | 'DINNER' | 'SNACK';
}

const initialState: FoodState = {
    foods: [],
    foodFetchStatus: Status.INITIAL,
    foodLoadMoreStatus: Status.INITIAL,
    historyLimit: 8,
    historyPage: 1,
    totalCount: 0
};

export const fetchHistoryFoodAction = createAsyncThunk('food/history', async (payload, { rejectWithValue }) => {
    try {
        return await getHistoryFood({});
    } catch (error) {
        rejectWithValue(error);
    }
});

export const loadMoreFoodAction = createAsyncThunk('food/load-more', async (payload, { rejectWithValue, getState }) => {
    try {
        const { food } = getState() as RootState;
        return await getHistoryFood({ page: food.historyPage + 1, type: food.typeFood });
    } catch (error) {
        rejectWithValue(error);
    }
});

export const filterFoodAction = createAsyncThunk<
    GetHistoryFoodResponse | undefined,
    'MORNING' | 'LUNCH' | 'DINNER' | 'SNACK'
>('food/filter', async (payload, { rejectWithValue }) => {
    try {
        return await getHistoryFood({ type: payload });
    } catch (error) {
        rejectWithValue(error);
    }
});

const foodSlice = createSlice({
    name: 'food',
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchHistoryFoodAction.pending, (state, action) => {
            state.foodFetchStatus = Status.LOADING;
        });
        builder.addCase(fetchHistoryFoodAction.fulfilled, (state, action) => {
            state.foodFetchStatus = Status.SUCCESS;
            state.foods = action.payload?.data.foods as Food[];
            state.totalCount = action.payload?.data.totalRecord ?? 0;
            state.historyPage = 1;
        });
        builder.addCase(fetchHistoryFoodAction.rejected, (state, action) => {
            state.foodFetchStatus = Status.FAILED;
        });

        builder.addCase(loadMoreFoodAction.pending, (state, action) => {
            state.foodLoadMoreStatus = Status.LOADING;
        });
        builder.addCase(loadMoreFoodAction.fulfilled, (state, action) => {
            state.foodLoadMoreStatus = Status.SUCCESS;
            state.foods = [...state.foods, ...(action.payload?.data.foods as Food[])];
            state.totalCount = action.payload?.data.totalRecord ?? 0;
            state.historyPage = state.historyPage + 1;
        });
        builder.addCase(loadMoreFoodAction.rejected, (state, action) => {
            state.foodLoadMoreStatus = Status.FAILED;
        });

        builder.addCase(filterFoodAction.pending, (state, action) => {
            state.foodLoadMoreStatus = Status.LOADING;
        });
        builder.addCase(filterFoodAction.fulfilled, (state, action) => {
            state.foodLoadMoreStatus = Status.SUCCESS;
            state.foods = action.payload?.data.foods as Food[];
            state.totalCount = action.payload?.data.totalRecord ?? 0;
            state.historyPage = 1;
        });
        builder.addCase(filterFoodAction.rejected, (state, action) => {
            state.foodLoadMoreStatus = Status.FAILED;
        });
    }
});

export const foodReducer = foodSlice.reducer;
