import { createSelector } from 'reselect';
import { Film } from '../../types/data';
import { getGenres } from '../../utils';

export const getFilms = (films: Film[]): Film[] => films;

export const getFilm = (film: Film): Film => film;

export const getCurrentGenres = createSelector([getFilms], getGenres);


