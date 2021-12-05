import { AuthStatus, Reducer } from '../../const';
import { State } from '../../types/state';

export const getAuthStatus = (state: State): AuthStatus =>
  state[Reducer.User].authStatus;

export const getAvatarUrl = (state: State): string =>
  state[Reducer.User].avatarUrl;
