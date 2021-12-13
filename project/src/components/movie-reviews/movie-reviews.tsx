import { useSelector } from 'react-redux';
import { getTwoCommentCol } from '../../store/app-data/selectors-app-data';
import ReviewsCol from '../rewiews-col/reviews-col';

function MovieReviews(): JSX.Element {

  const[leftCol, rightCol] = useSelector(getTwoCommentCol);
  return (
    <div className="film-card__reviews film-card__row">
      <ReviewsCol comments = {leftCol} />
      <ReviewsCol comments={rightCol} />
    </div>
  );
}

export default MovieReviews;
