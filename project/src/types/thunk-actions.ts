import { AxiosInstance } from 'axios';
import { HttpCode } from '../services/const';
import { RootState } from '../store/root-reducer';
import { AppDispatch } from '../store/store';
import { CommentGet, Film } from './data';

export enum AsyncThunk {
  FetchMainScreenData = 'data/fetchMainScreenData',
  FetchFilmScreenData = 'data/fetchFilmScreenData',
  FetchMyListScreenData = 'data/fetchMyListScreenData',
  CheckAuthStatus = 'user/checkAuthStatus',
  LoginAction = 'user/loginAction',
  LogoutAction = 'user/logoutAction',
  PostMyListData = 'data/postMyListData',
  PostCommentData = 'data/postCommentData',
}

export type AsyncThunkConfig = {
  _State: RootState;
  Dispatch: AppDispatch;
  extra: AxiosInstance;
  rejectValue: number;
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

export type MyListScreenData = {
  myListFilms: Film[];
}

export type AuthData = {
  avatarUrl: string;
}
