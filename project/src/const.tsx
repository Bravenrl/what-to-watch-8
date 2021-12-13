export const MAX_GENRES = 9;

export enum Reducer {
  App = 'APP',
  Data = 'DATA',
  User = 'USER',
}

export enum Slice {
  App = 'app',
  Data = 'data',
  User = 'user',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const enum LogoPosition {
  Header = 'header',
  Footer = 'footer',
}

export const enum ScreenType {
  Main = 'Main',
  Movie = 'Movie',
  SignIn = 'SignIn',
  MyList = 'MyList',
  AddReview = 'AddReview',
}

export const enum HeaderTitle {
  MyList = 'My list',
  SignIn = 'Sign in',
  NotFound = '404 Page not found',
}

export const enum PosterParams {
  TypeBackground = 'bg',
  TypePoster = 'poster',
  SizeBig = 'big',
  SizeSmall = 'small',
}

export const enum AppRoute {
  Root = '/',
  Film = '/films/:id',
  SignIn = '/login',
  MyList = '/list',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*',
  MovieDetails = 'details',
  MovieReviews = 'reviews',
}

export enum FilmInfo {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const ALL_GENRES = 'All genres';

export const RatingLevel = {
  Bad: {
    level: 'Bad',
  },
  Normal: {
    value: 3,
    level: 'Normal',
  },
  Good: {
    value: 5,
    level: 'Good',
  },
  VeryGood: {
    value: 8,
    level: 'Very good',
  },
  Awesome: {
    value: 10,
    level: 'Awesome',
  },
};

export const STARS = new Array(10)
  .fill(null)
  .map((el, index, array) => (el = array.length - index));

export const enum PreviewSize {
  Width = 280,
  Height = 175,
}

export const TIMEOUT_TIME = 1000;
export const INITIAL_FILM_COUNTER = 8;
export const FIXED_RATING = 1;

export const rePassword = /(?=.*[0-9])(?=.*[a-z])[0-9a-z]{2,}/;
export const reEmail = /.+@.+\..+/i;

export const PostValues  = {
  CommentDefault: '',
  RatingDefault: 0,
  CommentErr: 'Write a review. The text of the review must be at least 50 and no more than 400 characters.',
  RatingErr: 'Rate the movie',
};
