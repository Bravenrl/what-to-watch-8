import { NavLink, useLocation } from 'react-router-dom';
import { generatePath, Link, useMatch } from 'react-router-dom';
import { AppRoute } from '../../const';

type FilmCardButtonsProps = {
  isFavorite: boolean;
  id: number;
};

function FilmCardButtons({
  isFavorite,
  id,
}: FilmCardButtonsProps): JSX.Element {
  const location = useLocation();
  const isMovieScreen = useMatch(AppRoute.Film);
  const moviePath = isMovieScreen
    ? generatePath(AppRoute.AddReview, isMovieScreen.params)
    : '';
  const playerPath = generatePath(AppRoute.Player, { id: id.toString() });
  return (
    <div className='film-card__buttons'>
      <NavLink
        to={playerPath}
        state={{ player: location }}
        className='btn btn--play film-card__button'
        type='button'
      >
        <svg viewBox='0 0 19 19' width='19' height='19'>
          <use xlinkHref='#play-s'></use>
        </svg>
        <span>Play</span>
      </NavLink>
      <button className='btn btn--list film-card__button' type='button'>
        <svg
          viewBox={isFavorite ? '0 0 18 14' : '0 0 19 20'}
          width={isFavorite ? '18' : '19'}
          height={isFavorite ? '14' : '20'}
        >
          <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
        </svg>
        <span>My list</span>
      </button>
      {isMovieScreen && (
        <Link to={moviePath} className='btn film-card__button'>
          Add review
        </Link>
      )}
    </div>
  );
}

export default FilmCardButtons;
