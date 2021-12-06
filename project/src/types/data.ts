export type CommentGet = {
  id: number,
  user: {
    id: number,
    name: string,
  },
  rating: number,
  comment: string,
  date: string,
}

export type CommentPost = {
  rating: number,
  comment: string,
}

export type UserAuthData = {
  email: string,
  password: string,
}

export type AuthInfo = {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
  token: string,
};

export type NonAdaptFilm = {
  'poster_image': string,
  'preview_image': string,
  'background_image': string,
  'background_color': string,
  'video_link': string,
  'preview_video_link': string,
  'scores_count': number,
  'run_time': number,
  'is_favorite': boolean,
};

type BaseFilm = {
  id: number,
  name: string,
  description: string,
  rating: number,
  director: string,
  starring: string[],
  genre: string,
  released: number,
}

type AdaptFilm = {
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  scoresCount: number,
  isFavorite: boolean,
  runTime: number,
};

export type ServerFilm = BaseFilm & NonAdaptFilm;

export type Film = BaseFilm & AdaptFilm;

export type ServerAuthInfo = Omit<AuthInfo, 'avatarUrl'> & {
  'avatar_url': string,
}
