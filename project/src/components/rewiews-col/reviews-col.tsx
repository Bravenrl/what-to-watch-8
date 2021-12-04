import { FIXED_RATING } from '../../const';
import { CommentGet } from '../../types/data';
import { formatCommentDate } from '../../utils';

type RewiewsCol = {
  comments: CommentGet[];
}

function ReviewsCol({ comments }: RewiewsCol): JSX.Element {
  return (
    <div className="film-card__reviews-col">
      {comments.map(({id, user, comment, rating, date}) => (
        <div key={id} className="review">
          <blockquote className="review__quote">
            <p className="review__text">{comment}</p>

            <footer className="review__details">
              <cite className="review__author">{user.name}</cite>
              <time className="review__date" dateTime="2016-12-24">{formatCommentDate(date)}</time>
            </footer>
          </blockquote>
          <div className="review__rating">{rating.toFixed(FIXED_RATING)}</div>
        </div>))}
    </div>
  );
}

export default ReviewsCol;
