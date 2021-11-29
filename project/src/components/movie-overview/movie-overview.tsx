import { showRatingLevel } from '../../utils';
type MovieOverviewProps = {
  description: string,
  director: string,
  rating: number,
  scoresCount: number,
  starring: string[];
}

function MovieOverview({description, director, rating, scoresCount, starring}: MovieOverviewProps): JSX.Element {
  let counter = 0;
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{showRatingLevel(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {description.split('.').map((sentence) => <p key = {`${counter++}sentence`}>{sentence}</p>)}

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring.slice(0,4).join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default MovieOverview;
