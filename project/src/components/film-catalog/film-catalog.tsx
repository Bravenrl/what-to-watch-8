import classNames from 'classnames';
import { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { AppRoute, INITIAL_FILM_COUNTER } from '../../const';
import useFilter from '../../hooks/use-filter';
import { realFilms } from '../../mock/srever-data';
import { Film } from '../../types/data';
import FilmCardSmall from '../film-card-small/film-card-small';
import GenresList from '../genres-list/genres-list';
import ShowMoreButton from '../show-more-button/show-more-button';

type FilmCatalogProps = {
  films: Film[],
}

function FilmCatalog({films}: FilmCatalogProps): JSX.Element {
  const isMainScreen = useMatch(AppRoute.Root);
  const isMovieScreen = useMatch(AppRoute.Film);
  const filtredFilms = useFilter(films);
  const [filmCount, setFilmCount] = useState(
    films.length > INITIAL_FILM_COUNTER
      ? INITIAL_FILM_COUNTER
      : films.length);

  const filmsToShow = (isMainScreen) ? filtredFilms.slice(0, filmCount) : filtredFilms;

  const handleButtonClick = () => {
    setFilmCount((prevCount) => prevCount + INITIAL_FILM_COUNTER);
  };

  return (
    <section
      className={classNames('catalog', { 'catalog--like-this': isMovieScreen })}
    >
      <h2
        className={classNames('catalog__title', {
          'visually-hidden': !isMovieScreen,
        })}
      >
        {isMovieScreen ? 'More like this' : 'Catalog'}
      </h2>
      {isMainScreen && <GenresList />}
      <div className='catalog__films-list'>
        {filmsToShow.map((film) => (
          <FilmCardSmall
            key={film.id}
            id={film.id}
            name={film.name}
            previewImage={film.previewImage}
            previewVideoLink={film.previewVideoLink}
          />
        ))}
      </div>
      {isMainScreen && filmCount < realFilms.length && (
        <ShowMoreButton onButtonClick={handleButtonClick} />
      )}
    </section>
  );
}

export default FilmCatalog;
