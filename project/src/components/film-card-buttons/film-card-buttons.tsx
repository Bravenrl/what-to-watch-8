
import { NavLink } from 'react-router-dom';
import { generatePath, Link, useMatch } from 'react-router-dom';
import { AppRoute } from '../../const';

type FilmCardButtonsProps = {
  isFavorite: boolean,
}

function FilmCardButtons({ isFavorite }: FilmCardButtonsProps): JSX.Element {
  const isMovieScreen = useMatch(AppRoute.Film);
  const linkMoviePath = (isMovieScreen) ? generatePath(AppRoute.AddReview, isMovieScreen?.params) : '';
  return (
    <div className="film-card__buttons" >
      <NavLink to={AppRoute.Player} className="btn btn--play film-card__button" type="button" >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </NavLink>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox={isFavorite ? '0 0 18 14' : '0 0 19 20'}
          width={isFavorite ? '18' : '19'}
          height={isFavorite ? '14' : '20'}
        >
          <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
        </svg>
        <span>My list</span>
      </button>
      {isMovieScreen && <Link to={linkMoviePath} className="btn film-card__button">Add review</Link>}
    </div>
  );
}

export default FilmCardButtons;
