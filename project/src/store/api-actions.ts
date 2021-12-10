import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { adaptAuthInfoToClient, adaptFilmtoClient } from '../services/adapter';
import { ApiRoute, HttpCode } from '../services/const';
import { removeToken, setToken } from '../services/token';
import {
  CommentGet,
  Film,
  ServerAuthInfo,
  ServerFilm,
  UserAuthData
} from '../types/data';
import {
  AsyncThunk,
  AsyncThunkConfig,
  AuthData,
  FilmScreenData,
  MainScreenData,
  MyListScreenData
} from '../types/thunk-actions';
import { toggleFilmInList } from './app-process/slice-app-process';

export const fetchMainScreenData = createAsyncThunk<
  MainScreenData,
  undefined,
  AsyncThunkConfig
>(AsyncThunk.FetchMainScreenData, async (_, { dispatch, extra: api }) => {
  const [filmsResponse, promoResponse] = await axios.all<AxiosResponse>([
    api.get<ServerFilm[]>(ApiRoute.Films),
    api.get<ServerFilm>(ApiRoute.Promo),
  ]);
  const allFilms = filmsResponse.data.map(adaptFilmtoClient);
  const promoFilm = adaptFilmtoClient(promoResponse.data);
  dispatch(toggleFilmInList(promoFilm.isFavorite));
  return { allFilms, promoFilm };
});

export const fetchFilmScreenData = createAsyncThunk<
  FilmScreenData,
  string,
  AsyncThunkConfig
>(AsyncThunk.FetchFilmScreenData, async (id, { dispatch, extra: api }) => {
  const [
    { data: similarData },
    { data: currentData },
    { data: currentComments },
  ] = await axios.all<AxiosResponse>([
    api.get<ServerFilm[]>(`${ApiRoute.Films}/${id}${ApiRoute.Similar}`),
    api.get<ServerFilm>(`${ApiRoute.Films}/${id}`),
    api.get<CommentGet[]>(`${ApiRoute.Comments}/${id}`),
  ]);
  const similarFilms = similarData.map(adaptFilmtoClient);
  const currentFilm = adaptFilmtoClient(currentData);
  dispatch(toggleFilmInList(currentFilm.isFavorite));
  return { similarFilms, currentFilm, currentComments };
});

export const fetchMyListScreenData = createAsyncThunk<
  MyListScreenData,
  undefined,
  AsyncThunkConfig
>(AsyncThunk.FetchMyListScreenData, async (_, { extra: api }) => {
  const { data } = await api.get<ServerFilm[]>(ApiRoute.Favorite);
  const myListFilms = data.map(adaptFilmtoClient);
  return { myListFilms };
});

export const checkAuthStatus = createAsyncThunk<
  AuthData,
  undefined,
  AsyncThunkConfig
>(AsyncThunk.CheckAuthStatus, async (_, { rejectWithValue, extra: api }) => {
  try {
    const { data } = await api.get<ServerAuthInfo>(ApiRoute.Login);
    const { avatarUrl, token } = adaptAuthInfoToClient(data);
    setToken(token);
    return { avatarUrl };
  } catch (err) {
    return rejectWithValue(HttpCode.Unauthorised);
  }
});

export const loginAction = createAsyncThunk<
  AuthData,
  UserAuthData,
  AsyncThunkConfig
>(AsyncThunk.LoginAction, async (userData, { rejectWithValue, extra: api }) => {
  try {
    const {data} = await api.post<ServerAuthInfo>(ApiRoute.Login, userData);
    const { avatarUrl, token } = adaptAuthInfoToClient(data);
    setToken(token);
    return { avatarUrl };
  } catch (err) {
    return rejectWithValue(HttpCode.BadRequest);
  }
});

export const logoutAction = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  AsyncThunk.LogoutAction,
  async (_, { extra: api }) => {
    await api.delete(ApiRoute.Logout);
    removeToken();
  },
);

export const postMyListData = createAsyncThunk<
  Film,
  { id: number; status: number },
  AsyncThunkConfig
>(
  AsyncThunk.PostMyListData,
  async ({ id, status }, { dispatch, extra: api }) => {
    const { data } = await api.post<ServerFilm>(
      `${ApiRoute.Favorite}/${id}/${status}`,
    );
    const film = adaptFilmtoClient(data);
    dispatch(toggleFilmInList(film.isFavorite));
    return film;
  },
);

export const postCommentData = createAsyncThunk<
  CommentGet[],
  { id: number },
  AsyncThunkConfig
>(AsyncThunk.PostCommentData, async ({ id }, { extra: api }) => {
  const { data: currentComments } = await api.post<CommentGet[]>(
    `${ApiRoute.Comments}/${id}`,
  );
  return currentComments;
});
