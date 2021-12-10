import { useSelector } from 'react-redux';
import { FilmInfo } from '../../const';
import { getMovieInfo } from '../../store/app-process/selectors-app-process';
import { CommentGet, Film } from '../../types/data';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';
import MovieReviews from '../movie-reviews/movie-reviews';

type MovieInfoProps = {
  film : Film,
  comments: CommentGet[],
}

function MovieInfo({film, comments}:MovieInfoProps): JSX.Element {
  const {description, director, rating, runTime, scoresCount, starring, genre, released} = film;
  const movieInfo = useSelector(getMovieInfo);


  switch (movieInfo) {
    case FilmInfo.Details:
      return <MovieDetails director={director} genre = {genre} starring = {starring} released={released} runTime={runTime}/>;
    case FilmInfo.Reviews:
      return <MovieReviews comments = {comments}/>;
    default:
      return <MovieOverview description = {description} director = {director}  rating = {rating} scoresCount = {scoresCount} starring = {starring}/>;
  }
}

export default MovieInfo;
