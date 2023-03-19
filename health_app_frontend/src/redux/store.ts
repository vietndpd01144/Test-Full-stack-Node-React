import { exerciseReducer, userReducer, blogReducer, diaryReducer, bodyRecordReducer } from './slices';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { foodReducer } from './slices/foodSlice/food.slice';

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    whitelist: ['user']
};

const rootReducer = combineReducers({
    user: userReducer,
    exercise: exerciseReducer,
    diary: diaryReducer,
    food: foodReducer,
    blog: blogReducer,
    bodyRecord: bodyRecordReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
