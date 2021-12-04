import { AuthStatus } from '../const';
import { RootState } from '../store/store';
import { CommentGet, Film } from './data';

export type AppData = {
  promoFilm: Film;
  currentFilm: Film;
  currentComments: CommentGet[];
  allFilms: Film[];
  similarFilms: Film[];
  myListFilms: Film[];
};

export type AppProcess = {
  genre: string;
  movieInfo: string;
  isDataLoading: boolean;
  isDataPosting: boolean;
};

export type UserProcess = {
  AuthStatus: AuthStatus;
  avatarUrl: string;
};

export type State = RootState;
