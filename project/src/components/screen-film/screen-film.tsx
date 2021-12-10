import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import FilmCard from '../film-card/film-card';
import FilmDesc from '../film-desc/film-desc';
import Footer from '../footer/footer';
import Header from '../header/header';
import Navigate from '../navigate/navigate';
import { PosterParams, ScreenType } from '../../const';
import FilmCatalog from '../film-catalog/film-catalog';
import Poster from '../poster/poster';
import MovieInfo from '../movie-info/movie-info';
import { useSelector } from 'react-redux';
import {
  getCurrentComments,
  getCurrentFilm,
  getSimilarFilms
} from '../../store/app-data/selectors-app-data';
import Preloader from '../preloader/preloader';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { fetchFilmScreenData } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import {
  resetMovieInfo
} from '../../store/app-process/slice-app-process';

function ScreenFilm(): JSX.Element {
  const { id: pathId } = useParams();
  const dispatch = useAppDispatch();
  const films = useSelector(getSimilarFilms);
  const film = useSelector(getCurrentFilm);
  const comments = useSelector(getCurrentComments);
  const {
    id,
    name,
    genre,
    released,
    posterImage,
    backgroundImage,
    backgroundColor,
  } = film;

  useEffect(() => {
    dispatch(fetchFilmScreenData(pathId || ''));
    return () => {
      dispatch(resetMovieInfo());
    };
  }, [pathId, dispatch]);

  if (!id) {
    return <Preloader />;
  }

  return (
    <>
      <section
        className='film-card film-card--full'
        style={{ backgroundColor }}
      >
        <div className='film-card__hero'>
          <Poster
            type={PosterParams.TypeBackground}
            image={backgroundImage}
            name={name}
          />
          <Header screenType={ScreenType.Movie} />
          <div className='film-card__wrap'>
            <FilmDesc>
              <FilmCard name={name} genre={genre} released={released} />
              <FilmCardButtons id={id} />
            </FilmDesc>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <Poster
              type={PosterParams.TypePoster}
              size={PosterParams.SizeBig}
              image={posterImage}
              name={name}
            />
            <FilmDesc>
              <Navigate />
              <MovieInfo film={film} comments={comments} />
            </FilmDesc>
          </div>
        </div>
      </section>
      <div className='page-content'>
        <FilmCatalog films={films} />
        <Footer />
      </div>
    </>
  );
}

export default ScreenFilm;
