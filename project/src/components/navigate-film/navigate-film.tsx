import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { FilmInfo } from '../../const';

function NavigateFilm(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieInfo = searchParams.get('info');
  return (
    <>
      {Object.keys(FilmInfo).map((item) => (
        <li key={item} className={
          classNames(
            'film-nav__item',
            { 'film-nav__item--active': item.toLowerCase() === movieInfo })
        }
        >
          <a href='#todo' className="film-nav__link"
            onClick={(evt) => {
              evt.preventDefault();
              setSearchParams({ 'info': item.toLowerCase() });
            }}
          >
            {item}
          </a>
        </li>
      ))}
    </>
  );
}

export default NavigateFilm;
