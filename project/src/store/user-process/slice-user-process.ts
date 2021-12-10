import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStatus, Slice } from '../../const';
import { UserProcess } from '../../types/state';
import { AuthData } from '../../types/thunk-actions';
import { checkAuthStatus, loginAction, logoutAction } from '../api-actions';

const initialState: UserProcess = {
  authStatus: AuthStatus.Unknown,
  avatarUrl: '',
};

export const userProcessSlice = createSlice({
  name: Slice.User,
  initialState,
  reducers: {
    requireAuthStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.authStatus = action.payload;
    },
    requireLogout: (state) => {
      state.authStatus = AuthStatus.NoAuth;
      state.avatarUrl = '';
    },
  },
  extraReducers: {
    [checkAuthStatus.fulfilled.type]: (
      state,
      action: PayloadAction<AuthData>,
    ) => {
      state.authStatus = AuthStatus.Auth;
      state.avatarUrl = action.payload.avatarUrl;
    },
    [loginAction.fulfilled.type]: (state, action: PayloadAction<AuthData>) => {
      state.authStatus = AuthStatus.Auth;
      state.avatarUrl = action.payload.avatarUrl;
    },
    [logoutAction.fulfilled.type]: (state) => {
      state.avatarUrl = '';
      state.authStatus = AuthStatus.NoAuth;
    },
  },
});

export const { requireAuthStatus, requireLogout } = userProcessSlice.actions;

export default userProcessSlice.reducer;
