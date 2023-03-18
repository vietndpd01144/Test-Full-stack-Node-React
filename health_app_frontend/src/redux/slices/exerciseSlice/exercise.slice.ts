import { fetchExercises } from './../../../api/exercise/exerciseApi';
import { Exercise } from '@api/exercise/interfaces/exercise.interface';
import { Status } from '@config/enum/status';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ExerciseState {
    exercises: Exercise[];
    loadExercisesStatus: Status;
    loadMoreStatus: Status;
    limit: number;
    page: number;
    totalCount: number;
}
const initialState: ExerciseState = {
    exercises: [],
    loadExercisesStatus: Status.INITIAL,
    loadMoreStatus: Status.INITIAL,
    limit: 8,
    page: 1,
    totalCount: 0
};

export const fetchExerciseAction = createAsyncThunk('exercise/fetch-exercise', async (payload, { rejectWithValue }) => {
    try {
        return await fetchExercises({});
    } catch (error) {
        rejectWithValue(error);
    }
});

export const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchExerciseAction.pending, (state) => {
            state.loadExercisesStatus = Status.LOADING;
        });
        builder.addCase(fetchExerciseAction.fulfilled, (state, { payload }) => {
            state.loadExercisesStatus = Status.SUCCESS;
            state.exercises = payload?.data.exercises as Exercise[];
            state.totalCount = payload?.data.totalRecord ?? 0;
        });
        builder.addCase(fetchExerciseAction.rejected, (state) => {
            state.loadExercisesStatus = Status.FAILED;
        });
    }
});

export const exerciseReducer = exerciseSlice.reducer;
export const {} = exerciseSlice.actions;
