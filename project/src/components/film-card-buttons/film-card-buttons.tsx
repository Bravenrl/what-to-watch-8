import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { generatePath, Link, useMatch } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { updateFilm } from '../../store/app-data/slice-app-data';
import { getPromoFilm } from '../../store/app-data/selectors-app-data';
import { getIsFilmInList } from '../../store/app-process/selectors-app-process';
import { toggleFilmInList } from '../../store/app-process/slice-app-process';
import { useAuth } from '../../hooks/use-auth';

type FilmCardButtonsProps = {
  id: number;
};

function FilmCardButtons({ id }: FilmCardButtonsProps): JSX.Element {
  const location = useLocation();
  const isMovieScreen = useMatch(AppRoute.Film);
  const isInList = useSelector(getIsFilmInList);
  const isAuth = useAuth();

  const dispatch = useAppDispatch();
  const film = useSelector(getPromoFilm);
  const anotherFilm = { ...film, isFavorite: !film.isFavorite };

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
      <button
        className='btn btn--list film-card__button'
        type='button'
        onClick={() => {
          dispatch(updateFilm(anotherFilm));
          dispatch(toggleFilmInList(anotherFilm.isFavorite));
        }}
      >
        <svg
          viewBox={isInList ? '0 0 18 14' : '0 0 19 20'}
          width={isInList ? '18' : '19'}
          height={isInList ? '14' : '20'}
        >
          <use xlinkHref={isInList ? '#in-list' : '#add'}></use>
        </svg>
        <span>My list</span>
      </button>
      {(isMovieScreen&&isAuth) && (
        <Link to={moviePath} className='btn film-card__button'>
          Add review
        </Link>
      )}
    </div>
  );
}

export default FilmCardButtons;
