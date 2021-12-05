import { combineReducers } from '@reduxjs/toolkit';
import { Reducer } from '../const';
import appDataSlice from './app-data/slice-app-data';
import appProcessSlice from './app-process/slice-app-process';
import userProcessSlice from './user-process/slice-user-process';


export const RootReducer = combineReducers({
  [Reducer.Data]: appDataSlice,
  [Reducer.App]: appProcessSlice,
  [Reducer.User]: userProcessSlice,
});
