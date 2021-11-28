import classNames from 'classnames';
import { useMatch } from 'react-router-dom';
import { AppRoute } from '../../const';
import FilmCardSmall from '../film-card-small/film-card-small';
import GenresList from '../genres-list/genres-list';
import ShowMoreButton from '../show-more-button/show-more-button';

function FilmCatalog(): JSX.Element {
  const isMainScreen = useMatch(AppRoute.Root);
  const isMovieScreen = useMatch(AppRoute.Film);
  return (
    <section className={classNames('catalog', { 'catalog--like-this': isMovieScreen })}>
      <h2 className={classNames('catalog__title', { 'visually-hidden': !isMovieScreen })}>
        {isMovieScreen ? 'More like this' : 'Catalog'}
      </h2>
      {isMainScreen && <GenresList />}
      <div className="catalog__films-list">
        <FilmCardSmall />
      </div>
      {isMainScreen && <ShowMoreButton />}
    </section>
  );
}

export default FilmCatalog;
