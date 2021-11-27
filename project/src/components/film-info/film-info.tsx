import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieInfo } from '../../const';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';
import MovieReviews from '../movie-reviews/movie-reviews';

function FilmInfo(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const filmInfo = searchParams.get('info')||'';

  useEffect(() => {
    if (filmInfo==='') {setSearchParams({info: MovieInfo.Overview.toLowerCase()});}
  }, [filmInfo, setSearchParams]);

  if (filmInfo === MovieInfo.Details.toLowerCase()) { return <MovieDetails />; }
  if (filmInfo === MovieInfo.Reviews.toLowerCase()) { return <MovieReviews />; }
  return <MovieOverview />;
}

export default FilmInfo;

