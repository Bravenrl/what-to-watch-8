import { createAsyncThunk, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { adaptFilmtoClient } from '../services/adapter';
import { ApiRoute } from '../services/const';
import { ServerFilm } from '../types/data';
import { AsyncThunk, fetchMain } from '../types/thunk-actions';
import { toggleFilmInList } from './app-process/slice-app-process';

export const fetchAllFilm = createAsyncThunk<
  fetchMain,
  undefined,
  {dispatch: Dispatch,  extra: AxiosInstance }
>(AsyncThunk.FetchAllFilms, async (_, {dispatch, extra: api }) => {
  const [filmsResponse, promoResponse] = await axios.all<AxiosResponse>([
    api.get<ServerFilm[]>(ApiRoute.Films),
    api.get<ServerFilm>(ApiRoute.Promo),
  ]);
  const allFilms = filmsResponse.data.map(adaptFilmtoClient);
  const promoFilm = adaptFilmtoClient(promoResponse.data);
  dispatch(toggleFilmInList(promoFilm.isFavorite));
  return {allFilms, promoFilm};
});
