import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStatus, Slice } from '../../const';
import { UserProcess } from '../../types/state';

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
    },
    addAvatar: (state, action: PayloadAction<string>) => {
      state.avatarUrl = action.payload;
    },
  },
});

export const {requireAuthStatus, requireLogout, addAvatar} = userProcessSlice.actions;

export default userProcessSlice.reducer;
