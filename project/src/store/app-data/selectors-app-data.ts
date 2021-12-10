import { Reducer } from '../../const';
import { CommentGet, Film } from '../../types/data';
import { State } from '../../types/state';

export const getAllFilms = (state:State): Film[] => state[Reducer.Data].allFilms;

export const getCurrentFilm = (state:State): Film => state[Reducer.Data].currentFilm;

export const getMyListFilms = (state:State): Film[] => state[Reducer.Data].myListFilms;

export const getCurrentComments = (state:State): CommentGet[] => state[Reducer.Data].currentComments;

export const getIsDataLoading = (state:State): boolean => state[Reducer.Data].isDataLoading;

export const getIsDataPosting = (state:State): boolean => state[Reducer.Data].isDataPosting;
