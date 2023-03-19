import { toast } from 'react-toastify';
import { AddExerciseDataForm } from './interface';
import { fetchExercises, addExercise } from './../../../api/exercise/exerciseApi';
import { Exercise } from '@api/exercise/interfaces/exercise.interface';
import { Status } from '@config/enum/status';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ExerciseState {
    exercises: Exercise[];
    loadExercisesStatus: Status;
    loadMoreStatus: Status;
    addExerciseStatus: Status;
    limit: number;
    page: number;
    totalCount: number;
}
const initialState: ExerciseState = {
    exercises: [],
    loadExercisesStatus: Status.INITIAL,
    loadMoreStatus: Status.INITIAL,
    addExerciseStatus: Status.INITIAL,
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

export const addExerciseAction = createAsyncThunk<any, AddExerciseDataForm>(
    'exercise/add-exercise',
    async (payload, { rejectWithValue }) => {
        return await addExercise(payload);
    }
);

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

        builder.addCase(addExerciseAction.pending, (state) => {
            state.addExerciseStatus = Status.LOADING;
        });
        builder.addCase(addExerciseAction.fulfilled, (state, { payload }) => {
            state.addExerciseStatus = Status.SUCCESS;
            toast.success('Added exercise successfully');
        });
        builder.addCase(addExerciseAction.rejected, (state) => {
            state.addExerciseStatus = Status.FAILED;
            toast.error('Added exercise fail');
        });
    }
});

export const exerciseReducer = exerciseSlice.reducer;
