import dayjs from 'dayjs';
import { RatingLevel } from './const';
import duration from 'dayjs/plugin/duration';
import { CommentGet } from './types/data';
dayjs.extend(duration);

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
  if (RatingLevel.VeryGood.value <= rating && rating < RatingLevel.Awesome.value) {
    return RatingLevel.VeryGood.level;
  }
  return RatingLevel.Awesome.level;
};

export const formatRunTime = (runTime: number): string => dayjs.duration(runTime, 'm').format('H[h] mm[mm]');

export const getTwoArrSortByRating = (comments: CommentGet[]): CommentGet[][] =>
  [...comments].sort((a, b) => (b.rating - a.rating))
    .reduce((acc: CommentGet[][], value, index, array) => {
      if ((index <= Math.ceil(array.length - 1) / 2)) {
        acc[0].push(value);
        return acc;
      }
      acc[1].push(value);
      return acc;
    }, [[], []]);


