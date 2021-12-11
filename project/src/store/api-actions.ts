import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { AppRoute, FilmInfo } from '../const';
import { adaptAuthInfoToClient, adaptFilmtoClient } from '../services/adapter';
import { ApiRoute, HttpCode } from '../services/const';
import { createToast } from '../services/toast';
import { removeToken, setToken } from '../services/token';
import {
  CommentGet,
  CommentPost,
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
  MyListScreenData,
  VideoScreenData
} from '../types/thunk-actions';
import {
  setMovieInfo,
  toggleFilmInList
} from './app-process/slice-app-process';
import { redirectToRoute } from './middlewares/middleware-action';

export const fetchMainScreenData = createAsyncThunk<
  MainScreenData,
  undefined,
  AsyncThunkConfig
>(
  AsyncThunk.FetchMainScreenData,
  async (_, { dispatch, rejectWithValue, extra: api }) => {
    try {
      const [filmsResponse, promoResponse] = await axios.all<AxiosResponse>([
        api.get<ServerFilm[]>(ApiRoute.Films),
        api.get<ServerFilm>(ApiRoute.Promo),
      ]);
      const allFilms = filmsResponse.data.map(adaptFilmtoClient);
      const currentFilm = adaptFilmtoClient(promoResponse.data);
      dispatch(toggleFilmInList(currentFilm.isFavorite));
      return { allFilms, currentFilm };
    } catch (err) {
      createToast(err);
      if (err === HttpCode.NotFound || err === undefined) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }
      return rejectWithValue(err);
    }
  },
);

export const fetchFilmScreenData = createAsyncThunk<
  FilmScreenData,
  string,
  AsyncThunkConfig
>(
  AsyncThunk.FetchFilmScreenData,
  async (id, { dispatch, rejectWithValue, extra: api }) => {
    try {
      const [
        { data: similarData },
        { data: currentData },
        { data: currentComments },
      ] = await axios.all<AxiosResponse>([
        api.get<ServerFilm[]>(`${ApiRoute.Films}/${id}${ApiRoute.Similar}`),
        api.get<ServerFilm>(`${ApiRoute.Films}/${id}`),
        api.get<CommentGet[]>(`${ApiRoute.Comments}/${id}`),
      ]);
      const allFilms = similarData.map(adaptFilmtoClient);
      const currentFilm = adaptFilmtoClient(currentData);
      dispatch(toggleFilmInList(currentFilm.isFavorite));
      return { allFilms, currentFilm, currentComments };
    } catch (err) {
      createToast(err);
      if (err === HttpCode.NotFound || err === undefined) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }
      return rejectWithValue(err);
    }
  },
);

export const fetchVideoScreenData = createAsyncThunk<
  VideoScreenData,
  string,
  AsyncThunkConfig
>(
  AsyncThunk.FetchVideoScreenData,
  async (id, { dispatch, rejectWithValue, extra: api }) => {
    try {
      const { data } = await api.get<ServerFilm>(`${ApiRoute.Films}/${id}`);
      const currentFilm = adaptFilmtoClient(data);
      return { currentFilm };
    } catch (err) {
      createToast(err);
      if (err === HttpCode.NotFound || err === undefined) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }
      return rejectWithValue(err);
    }
  },
);

export const fetchMyListScreenData = createAsyncThunk<
  MyListScreenData,
  undefined,
  AsyncThunkConfig
>(
  AsyncThunk.FetchMyListScreenData,
  async (_, { dispatch, rejectWithValue, extra: api }) => {
    try {
      const { data } = await api.get<ServerFilm[]>(ApiRoute.Favorite);
      const allFilms = data.map(adaptFilmtoClient);
      return { allFilms };
    } catch (err) {
      createToast(err);
      if (err === HttpCode.NotFound || err === undefined) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }
      return rejectWithValue(err);
    }
  },
);

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
    return rejectWithValue(err);
  }
});

export const loginAction = createAsyncThunk<
  AuthData,
  UserAuthData,
  AsyncThunkConfig
>(AsyncThunk.LoginAction, async (userData, { rejectWithValue, extra: api }) => {
  try {
    const { data } = await api.post<ServerAuthInfo>(ApiRoute.Login, userData);
    const { avatarUrl, token } = adaptAuthInfoToClient(data);
    setToken(token);
    return { avatarUrl };
  } catch (err) {
    createToast(err);
    return rejectWithValue(err);
  }
});

export const logoutAction = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  AsyncThunk.LogoutAction,
  async (_, { rejectWithValue, extra: api }) => {
    try {
      await api.delete(ApiRoute.Logout);
      removeToken();
    } catch (err) {
      createToast(err);
      return rejectWithValue(err);
    }
  },

);

export const postMyListData = createAsyncThunk<
  void,
  { id: number; status: number },
  AsyncThunkConfig
>(
  AsyncThunk.PostMyListData,
  async ({ id, status }, { dispatch, rejectWithValue, extra: api }) => {
    try {
      const { data } = await api.post<ServerFilm>(
        `${ApiRoute.Favorite}/${id}/${status}`,
      );
      const film = adaptFilmtoClient(data);
      dispatch(toggleFilmInList(film.isFavorite));
    } catch (err) {
      createToast(err);
      return rejectWithValue(err as number);
    }
  },
);

export const postCommentData = createAsyncThunk<
  CommentGet[],
  { id: string; comment: CommentPost },
  AsyncThunkConfig
>(
  AsyncThunk.PostCommentData,
  async ({ id, comment }, { dispatch, rejectWithValue, extra: api }) => {
    try{
      const { data: currentComments } = await api.post<CommentGet[]>(
        `${ApiRoute.Comments}/${id}`,
        comment,
      );
      dispatch(setMovieInfo(FilmInfo.Reviews));
      return currentComments;
    } catch (err) {
      createToast(err);
      return rejectWithValue(err as number);
    }
  },

);
