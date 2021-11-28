import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilmInfo } from '../../const';
import { Film } from '../../types/data';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';
import MovieReviews from '../movie-reviews/movie-reviews';

type MovieInfoProps = {
  film : Film,
}

function MovieInfo({film}:MovieInfoProps): JSX.Element {
  const {description, director, rating, runTime, scoresCount, starring, genre, released} = film;
  const [searchParams, setSearchParams] = useSearchParams();
  const movieInfo = searchParams.get('info') || '';
  useEffect(() => {
    if (!movieInfo) {
      setSearchParams({ 'info': FilmInfo.Overview.toLowerCase() });
    }
  }, [setSearchParams, movieInfo]);


  switch (movieInfo) {
    case FilmInfo.Details.toLowerCase():
      return <MovieDetails director={director} genre = {genre} starring = {starring} released={released} runTime={runTime}/>;
    case FilmInfo.Reviews.toLowerCase():
      return <MovieReviews />;
    default:
      return <MovieOverview description = {description} director = {director}  rating = {rating} scoresCount = {scoresCount} starring = {starring}/>;
  }
}

export default MovieInfo;
