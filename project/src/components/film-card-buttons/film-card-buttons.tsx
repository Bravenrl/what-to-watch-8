import { generatePath, Link, useMatch } from 'react-router-dom';
import { AppRoute } from '../../const';

function FilmCardButtons(): JSX.Element {

  const isInList = false;
  const isMoviePage = useMatch(AppRoute.Film);
  const linkPath = (isMoviePage) ? generatePath(AppRoute.AddReview, isMoviePage?.params) : AppRoute.Root;
  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={isInList ? '#in-list' : '#add'}></use>
        </svg>
        <span>My list</span>
      </button>
      {isMoviePage && <Link to={linkPath} className="btn film-card__button">Add review</Link>}
    </div>
  );
}

export default FilmCardButtons;
