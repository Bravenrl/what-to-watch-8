import classNames from 'classnames';
import { Link, useMatch, useSearchParams } from 'react-router-dom';
import { AppRoute, MovieInfo} from '../../const';

type MovieNavPrors = {
  locationScreen: string
}

function MovieNav({ locationScreen }: MovieNavPrors): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const filmInfo = searchParams.get('info') || '';
  const isMovieScreen = useMatch(AppRoute.Film);
  const isAddReviewScreen = useMatch(AppRoute.AddReview);

  return (
    <nav className={isMovieScreen ? 'film-nav film-card__nav' : 'breadcrumbs'}>
      <ul className={isMovieScreen ? 'film-nav__list' : 'breadcrumbs__list'}>

        {isAddReviewScreen &&
          <>
            <li className="breadcrumbs__item">
              <Link to={isAddReviewScreen.pathname} className="breadcrumbs__link">The Grand Budapest Hotel</Link>
            </li>
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link">Add review</span>
            </li>
          </>}

        {isMovieScreen &&
          Object.values(MovieInfo).map((item) => (
            <li key={item} className={
              classNames(
                'film-nav__item',
                { 'film-nav__item--active': item.toLowerCase() === filmInfo })
            }
            >
              <a href='#todo' className="film-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  setSearchParams({ info: item.toLowerCase() });
                }}
              >
                {item}
              </a>
            </li>
          ))}
      </ul>
    </nav >
  );
}

export default MovieNav;
