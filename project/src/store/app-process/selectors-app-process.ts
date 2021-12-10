import { Reducer } from '../../const';
import { State } from '../../types/state';

export const getMovieInfo = (state:State): string => state[Reducer.App].movieInfo;

export const getIsFilmInList = (state:State): boolean|null => state[Reducer.App].isFilmInList;
