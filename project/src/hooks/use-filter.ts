import { useSearchParams } from 'react-router-dom';
import { Film } from '../types/data';

function useFilter(films:Film[]): Film[] {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('genre') || '';
  const filtredFilms = filterParam
    ? films.filter((film) => film.genre.toLowerCase() === filterParam)
    : films;
  return filtredFilms;
}

export default useFilter;
