import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { FilmInfo } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { getMovieInfo } from '../../store/app-process/selectors-app-process';
import { setMovieInfo } from '../../store/app-process/slice-app-process';

function NavigateFilm(): JSX.Element {
  const movieInfo = useSelector(getMovieInfo);
  const dispatch = useAppDispatch();
  return (
    <>
      {Object.keys(FilmInfo).map((item) => (
        <li key={item} className={
          classNames(
            'film-nav__item',
            { 'film-nav__item--active': item === movieInfo })
        }
        >
          <a href='#todo' className="film-nav__link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(setMovieInfo(item));
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
