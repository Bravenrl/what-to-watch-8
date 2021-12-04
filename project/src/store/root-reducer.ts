import { combineReducers } from '@reduxjs/toolkit';
import { Reducer } from '../const';
import appDataSlice from './app-data/app-data-slice';

export const RootReducer = combineReducers({
  [Reducer.Data]: appDataSlice,
});
