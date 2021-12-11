import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { AppRoute, INITIAL_FILM_COUNTER } from '../../const';
import useFilter from '../../hooks/use-filter';
import { getAllFilms } from '../../store/app-data/selectors-app-data';
import FilmCardSmall from '../film-card-small/film-card-small';
import GenresList from '../genres-list/genres-list';
import ShowMoreButton from '../show-more-button/show-more-button';

function FilmCatalog(): JSX.Element {
  const isMainScreen = useMatch(AppRoute.Root);
  const isMovieScreen = useMatch(AppRoute.Film);
  const films = useSelector(getAllFilms);
  const filtredFilms = useFilter(films);

  const [filmCount, setFilmCount] = useState(INITIAL_FILM_COUNTER);

  useEffect(() => {
    setFilmCount(
      filtredFilms.length > INITIAL_FILM_COUNTER
        ? INITIAL_FILM_COUNTER
        : filtredFilms.length,
    );
  }, [filtredFilms]);

  const filmsToShow = isMainScreen
    ? filtredFilms.slice(0, filmCount)
    : filtredFilms;

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
      {isMainScreen && filmCount < filtredFilms.length && (
        <ShowMoreButton onButtonClick={handleButtonClick} />
      )}
    </section>
  );
}

export default FilmCatalog;
