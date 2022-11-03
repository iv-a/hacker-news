import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import hnApi from '../services/api';
import storiesReducer from './slices/news-stories-slice';

const rootReducer = combineReducers({
  stories: storiesReducer,
  [hnApi.reducerPath]: hnApi.reducer,
});

export const configureAppStore = () => configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hnApi.middleware),
});

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof configureAppStore>;
export type TAppDispatch = TAppStore['dispatch'];

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
