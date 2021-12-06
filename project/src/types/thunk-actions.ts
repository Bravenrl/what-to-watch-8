import { Film } from './data';

export enum AsyncThunk {
  FetchAllFilms = 'data/fetchAllFilms',
}

export type fetchMain = {
  allFilms: Film[];
  promoFilm: Film;
};
