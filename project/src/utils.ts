import dayjs from 'dayjs';
import { RatingLevel } from './const';
import duration from 'dayjs/plugin/duration';
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

