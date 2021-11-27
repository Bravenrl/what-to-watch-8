import { Link, useMatch } from 'react-router-dom';
import { AppRoute } from '../../const';
import NavigateFilm from '../navigate-film/navigate-film';

function Navigate(): JSX.Element {
  const isAddReviewScreen = useMatch(AppRoute.AddReview);
  return (
    <nav className={isAddReviewScreen ? 'breadcrumbs' : 'film-nav film-card__nav'}>
      <ul className={isAddReviewScreen ? 'breadcrumbs__list' : 'film-nav__list'}>

        {isAddReviewScreen &&
          <>
            <li className="breadcrumbs__item">
              <Link to={isAddReviewScreen.pathname} className="breadcrumbs__link">The Grand Budapest Hotel</Link>
            </li>
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link">Add review</span>
            </li>
          </>}

        {!isAddReviewScreen && <NavigateFilm />}
      </ul>
    </nav >
  );
}

export default Navigate;
