import { createAsyncThunk } from '@reduxjs/toolkit';
import { adaptFilmtoClient } from '../services/adapter';
import api from '../services/api';
import { ApiRoute } from '../services/const';
import { ServerFilm } from '../types/data';
import { AsyncThunk } from '../types/thunk-actions';


export const fetchAllFilm = createAsyncThunk(AsyncThunk.FetchAllFilms, async (_, thunkApi) => {
  const { data } = await api.get<ServerFilm[]>(ApiRoute.Films);
  const allFilms = data.map(adaptFilmtoClient);
  return allFilms;
});
