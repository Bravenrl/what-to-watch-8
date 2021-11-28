import { AuthInfo, Film, ServerAuthInfo, ServerFilm } from '../types/data';

export const adaptFilmtoClient = (film: ServerFilm): Film => {
  const { 'poster_image': posterImage,
    'preview_image': previewImage,
    'background_image': backgroundImage,
    'background_color': backgroundColor,
    'video_link': videoLink,
    'preview_video_link': previewVideoLink,
    'scores_count': scoresCount,
    'run_time': runTime,
    'is_favorite': isFavorite,
    ...rest } = film;

  return {
    ...rest,
    posterImage,
    previewImage,
    backgroundImage,
    backgroundColor,
    videoLink,
    previewVideoLink,
    scoresCount,
    runTime,
    isFavorite,
  };
};

export const adaptAuthInfoToClient = (authInfo: ServerAuthInfo): AuthInfo => {
  const { 'avatar_url': avatarUrl, ...rest } = authInfo;
  return {
    ...rest,
    avatarUrl,
  };
};

