import { Reducer } from '../../const';
import { CommentGet, Film } from '../../types/data';
import { State } from '../../types/state';

export const getAllFilms = (state:State): Film[] => state[Reducer.Data].allFilms;

export const getPromoFilm = (state:State): Film => state[Reducer.Data].promoFilm;

export const getCurrentFilm = (state:State): Film => state[Reducer.Data].currentFilm;

export const getSimilarFilms = (state:State): Film[] => state[Reducer.Data].similarFilms;

export const getMyListFilms = (state:State): Film[] => state[Reducer.Data].myListFilms;

export const getCurrentComments = (state:State): CommentGet[] => state[Reducer.Data].currentComments;