import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getAllFilms } from '../store/app-data/selectors-app-data';
import { Film } from '../types/data';

function useFilter(): Film[] {
  const [searchParams] = useSearchParams();
  const films = useSelector(getAllFilms);
  const filterParam = searchParams.get('genre') || '';
  const filtredFilms = filterParam
    ? films.filter((film) => film.genre.toLowerCase() === filterParam)
    : films;
  return filtredFilms;
}

export default useFilter;
