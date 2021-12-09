import { useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { generatePath, Link, useMatch } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { getIsFilmInList } from '../../store/app-process/selectors-app-process';
import { useAuth } from '../../hooks/use-auth';
import { postMyListData } from '../../store/api-actions';

type FilmCardButtonsProps = {
  id: number;
};

function FilmCardButtons({ id }: FilmCardButtonsProps): JSX.Element {
  const location = useLocation();
  const isMovieScreen = useMatch(AppRoute.Film);
  const isInListStatus = useSelector(getIsFilmInList);
  const isAuth = useAuth();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

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
          isAuth
            ? dispatch(postMyListData({ id, status: +!isInListStatus }))
            : navigate(AppRoute.SignIn);
        }}
      >
        <svg
          viewBox={isInListStatus ? '0 0 18 14' : '0 0 19 20'}
          width={isInListStatus ? '18' : '19'}
          height={isInListStatus ? '14' : '20'}
        >
          <use xlinkHref={isInListStatus ? '#in-list' : '#add'}></use>
        </svg>
        <span>My list</span>
      </button>
      {isMovieScreen && isAuth && (
        <Link to={moviePath} className='btn film-card__button'>
          Add review
        </Link>
      )}
    </div>
  );
}

export default FilmCardButtons;
