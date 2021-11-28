export const AUTH_STATUS = true;

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

export const GENRES: string[] = [
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers'];

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

