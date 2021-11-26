import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ScreenType } from '../../const';

const MOVIE_NAV: string[] = ['Overview', 'Details', 'Reviews'];

type MovieNavPrors = {
  locationScreen: string
}

function MovieNav({ locationScreen }: MovieNavPrors): JSX.Element {
  const isMovieScreen: boolean = (locationScreen === ScreenType.Movie);
  const itemAactive = 'Overview';
  return (
    <nav className={isMovieScreen ? 'film-nav film-card__nav' : 'breadcrumbs'}>
      <ul className={isMovieScreen ? 'film-nav__list' : 'breadcrumbs__list'}>

        {!isMovieScreen &&
          <>
            <li className="breadcrumbs__item">
              <Link to='/films/1' className="breadcrumbs__link">The Grand Budapest Hotel</Link>
            </li>
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link">Add review</span>
            </li>
          </>}

        {isMovieScreen &&
          MOVIE_NAV.map((item) => (
            <li key={item} className={
              classNames(
                'film-nav__item',
                { 'film-nav__item--active': item === itemAactive })
            }
            >
              <a href="#todo" className="film-nav__link">{item}</a>
            </li>
          ))}
      </ul>
    </nav >
  );
}

export default MovieNav;
