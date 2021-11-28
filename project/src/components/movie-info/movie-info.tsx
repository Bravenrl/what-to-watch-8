import { useSearchParams } from 'react-router-dom';
import { FilmInfo } from '../../const';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';
import MovieReviews from '../movie-reviews/movie-reviews';

function MovieInfo(): JSX.Element {
  const [searchParams] = useSearchParams();
  const movieInfo = searchParams.get('info') || '';
  switch (movieInfo) {
    case FilmInfo.Details.toLowerCase():
      return <MovieDetails />;
    case FilmInfo.Reviews.toLowerCase():
      return <MovieReviews />;
    default:
      return <MovieOverview />;
  }
}

export default MovieInfo;
