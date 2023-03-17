import { Exercise } from '@api/exercise/interfaces/exercise.interface';
import { Status } from '@config/enum/status';
import { createSlice } from '@reduxjs/toolkit';

interface ExerciseState {
    exercises: Exercise[];
    loadExercises: Status;
    loadMore: Status;
}
const initialState: ExerciseState = {
    exercises: [
        { id: 'id_1', title: ' 家事全般（立位・軽い）', time: 600, calories: 26, createAt: Date.now() },
        { id: 'id_2', title: ' 家事全般（立位・軽い）', time: 600, calories: 26, createAt: Date.now() },
        { id: 'id_3', title: ' 家事全般（立位・軽い）', time: 600, calories: 26, createAt: Date.now() },
        { id: 'id_4', title: ' 家事全般（立位・軽い）', time: 600, calories: 26, createAt: Date.now() },
        { id: 'id_5', title: ' 家事全般（立位・軽い）', time: 600, calories: 26, createAt: Date.now() },
        { id: 'id_6', title: ' 家事全般（立位・軽い）', time: 600, calories: 26, createAt: Date.now() },
        { id: 'id_7', title: ' 家事全般（立位・軽い）', time: 600, calories: 26, createAt: Date.now() },
        { id: 'id_8', title: ' 家事全般（立位・軽い）', time: 600, calories: 26, createAt: Date.now() },
        { id: 'id_9', title: ' 家事全般（立位・軽い）', time: 600, calories: 26, createAt: Date.now() }
    ],
    loadExercises: Status.INITIAL,
    loadMore: Status.INITIAL
};

export const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    reducers: {}
});

export const exerciseReducer = exerciseSlice.reducer;
export const {} = exerciseSlice.actions;
