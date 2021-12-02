import dayjs from 'dayjs';
import { RatingLevel } from './const';
import duration from 'dayjs/plugin/duration';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { CommentGet, Film } from './types/data';

dayjs.extend(duration);
dayjs.extend(LocalizedFormat);

export const showRatingLevel = (rating: number): string => {
  if (rating < RatingLevel.Normal.value) {
    return RatingLevel.Bad.level;
  }
  if (RatingLevel.Normal.value <= rating && rating < RatingLevel.Good.value) {
    return RatingLevel.Normal.level;
  }
  if (RatingLevel.Good.value <= rating && rating < RatingLevel.VeryGood.value) {
    return RatingLevel.Good.level;
  }
  if (
    RatingLevel.VeryGood.value <= rating &&
    rating < RatingLevel.Awesome.value
  ) {
    return RatingLevel.VeryGood.level;
  }
  return RatingLevel.Awesome.level;
};

export const formatRunTime = (runTime: number): string =>
  dayjs.duration(runTime, 'm').format('H[h] mm[mm]');
export const formatRunTimeForPlayer = (runTime: number): string =>
  dayjs(runTime).hour()
    ? dayjs.duration(runTime, 's').format('mm:ss')
    : dayjs.duration(runTime, 's').format('h:mm:ss');
export const formatCommentDate = (date: string): string =>
  dayjs(date).format('LL');

export const getTwoArrSortByRating = (comments: CommentGet[]): CommentGet[][] =>
  [...comments]
    .sort((a, b) => b.rating - a.rating)
    .reduce(
      (acc: CommentGet[][], value, index, array) => {
        if (index <= Math.ceil(array.length - 1) / 2) {
          acc[0].push(value);
          return acc;
        }
        acc[1].push(value);
        return acc;
      },
      [[], []]);

export const isEscEvent = (evt: KeyboardEvent): boolean =>
  evt.key === 'Escape' || evt.key === 'Esc';

export const isSpaceEvent = (evt: KeyboardEvent): boolean =>
  evt.key === ' ' || evt.key === 'Spacebar';

export const getGenres = (films: Film[]): string[] =>
  films.reduce((genres, film) => {
    if (genres.find((genre) => genre === film.genre)) {
      return genres;
    }
    genres.push(film.genre);
    return genres;
  }, [] as string[]);
