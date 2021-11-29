import { CommentGet } from '../../types/data';
import { getTwoArrSortByRating } from '../../utils';
import ReviewsCol from '../rewiews-col/reviews-col';

type MovieReviewsProps = {
  comments: CommentGet[],
}

function MovieReviews({comments}:MovieReviewsProps): JSX.Element {

  const[leftCol, rightCol] = getTwoArrSortByRating(comments);
  return (
    <div className="film-card__reviews film-card__row">
      <ReviewsCol comments = {leftCol} />
      <ReviewsCol comments={rightCol} />
    </div>

  );
}

export default MovieReviews;
