import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { ALL_GENRES, GENRES } from '../../const';

function GenresList(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const genreInfo = searchParams.get('genre') || '';
  return (
    <ul className="catalog__genres-list">
      < li className={classNames('catalog__genres-item ',
        { 'catalog__genres-item--active': genreInfo === '' })}
      >
        <a href="#todo" className="catalog__genres-link"
          onClick={(evt) => {
            evt.preventDefault();
            setSearchParams('');
          }}
        >
          {ALL_GENRES}
        </a>
      </li>
      {
        GENRES.map((genre) => (
          < li key={genre} className={classNames('catalog__genres-item ',
            { 'catalog__genres-item--active': genreInfo === genre.toLowerCase() })}
          >
            <a href="#todo" className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                setSearchParams({ genre: genre.toLowerCase() });
              }}
            >
              {genre}
            </a>
          </li>
        ))
      }
    </ul >
  );
}

export default GenresList;
