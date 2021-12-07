import { createAsyncThunk, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { adaptFilmtoClient } from '../services/adapter';
import { ApiRoute } from '../services/const';
import { CommentGet, ServerFilm } from '../types/data';
import { AsyncThunk, FilmScreenData, MainScreenData, MyListScreenData } from '../types/thunk-actions';
import { toggleFilmInList } from './app-process/slice-app-process';

export const fetchMainScreenData = createAsyncThunk<
  MainScreenData,
  undefined,
  {dispatch: Dispatch,  extra: AxiosInstance }
>(AsyncThunk.FetchMainScreenData, async (_, {dispatch, extra: api }) => {
  const [filmsResponse, promoResponse] = await axios.all<AxiosResponse>([
    api.get<ServerFilm[]>(ApiRoute.Films),
    api.get<ServerFilm>(ApiRoute.Promo),
  ]);
  const allFilms = filmsResponse.data.map(adaptFilmtoClient);
  const promoFilm = adaptFilmtoClient(promoResponse.data);
  dispatch(toggleFilmInList(promoFilm.isFavorite));
  return {allFilms, promoFilm};
});

export const fetchFilmScreenData = createAsyncThunk<
  FilmScreenData,
  string,
  {dispatch: Dispatch,  extra: AxiosInstance }
>(AsyncThunk.FetchFilmScreenData, async (id, {dispatch, extra: api }) => {
  const [{data: similarData}, {data: currentData}, {data: currentComments}] = await axios.all<AxiosResponse>([
    api.get<ServerFilm[]>(`${ApiRoute.Films}/${id}${ApiRoute.Similar}`),
    api.get<ServerFilm>(`${ApiRoute.Films}/${id}`),
    api.get<CommentGet[]>(`${ApiRoute.Comments}/${id}`),
  ]);
  const similarFilms = similarData.map(adaptFilmtoClient);
  const currentFilm = adaptFilmtoClient(currentData);
  dispatch(toggleFilmInList(currentFilm.isFavorite));
  return {similarFilms, currentFilm, currentComments};
});

export const fetchMyListScreenData = createAsyncThunk<
MyListScreenData,
undefined,
{extra: AxiosInstance }
>(AsyncThunk.FetchMyListScreenData, async (_, {extra: api }) => {
  const {data} = await api.get<ServerFilm[]>(ApiRoute.Favorite);
  const myListFilms = data.map(adaptFilmtoClient);
  return {myListFilms};
});
