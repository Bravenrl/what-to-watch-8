import { AxiosInstance } from 'axios';
import { RootState } from '../store/root-reducer';
import { AppDispatch } from '../store/store';
import { CommentGet, Film } from './data';

export enum AsyncThunk {
  FetchMainScreenData = 'data/fetchMainScreenData',
  FetchFilmScreenData = 'data/fetchFilmScreenData',
  FetchMyListScreenData = 'data/fetchMyListScreenData',
  FetchVideoScreenData = 'data/fetchVideoScreenData',
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
  currentFilm: Film;
};

export type FilmScreenData = MainScreenData&{
  currentComments: CommentGet[];
}

export type MyListScreenData = {
  myListFilms: Film[];
}

export type VideoScreenData = {
  currentFilm: Film;
}

export type AuthData = {
  avatarUrl: string;
}
