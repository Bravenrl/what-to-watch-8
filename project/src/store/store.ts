import { configureStore } from '@reduxjs/toolkit';
import { AuthStatus } from '../const';
import { createApi } from '../services/api';
import { redirect } from './middlewares/redirect';
import { RootReducer } from './root-reducer';
import { requireAuthStatus } from './user-process/slice-user-process';


const api = createApi(() =>
  store.dispatch(requireAuthStatus(AuthStatus.NoAuth)));

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: api } }).concat(redirect),
});

type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
