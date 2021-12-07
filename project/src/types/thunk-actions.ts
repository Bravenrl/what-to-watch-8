import { CommentGet, Film } from './data';

export enum AsyncThunk {
  FetchMainScreenData = 'data/fetchMainScreenData',
  FetchFilmScreenData = 'data/fetchFilmScreenData',
}

export type MainScreenData = {
  allFilms: Film[];
  promoFilm: Film;
};

export type FilmScreenData = {
  similarFilms: Film[];
  currentFilm: Film;
  currentComments: CommentGet[];
}
