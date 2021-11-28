import classNames from 'classnames';
import { useState } from 'react';
import { generatePath, Link, useParams } from 'react-router-dom';
import { AppRoute, FilmInfo } from '../../const';

function NavigateFilm(): JSX.Element {
  const [state, setState] = useState(FilmInfo.Overview.toString());
  const { id } = useParams();
  const linkPath = generatePath(AppRoute.Film, { id });
  return (
    <>
      {Object.keys(FilmInfo).map((item) => (
        <li key={item} className={
          classNames(
            'film-nav__item',
            { 'film-nav__item--active': item === state })
        }
        >
          <Link
            to={item === FilmInfo.Overview ? linkPath : item.toLowerCase()}
            className="film-nav__link"
            onClick={() => setState(item)}
            replace
          >
            {item}
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavigateFilm;
