
import { createSelector } from '@reduxjs/toolkit';
import { Reducer } from '../../const';
import { CommentGet, Film } from '../../types/data';
import { State } from '../../types/state';
import { getGenres } from '../../utils';

export const getAllFilms = (state:State): Film[] => state[Reducer.Data].allFilms;

export const getCurrentFilm = (state:State): Film => state[Reducer.Data].currentFilm;

export const getCurrentComments = (state:State): CommentGet[] => state[Reducer.Data].currentComments;

export const getIsDataLoading = (state:State): boolean => state[Reducer.Data].isDataLoading;

export const getIsDataPosting = (state:State): boolean => state[Reducer.Data].isDataPosting;

export const getCurrentGenres = createSelector(
  getAllFilms,
  (allFilms) => getGenres(allFilms),
);
