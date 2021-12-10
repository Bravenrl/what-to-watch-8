import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import FilmCard from '../film-card/film-card';
import FilmDesc from '../film-desc/film-desc';
import Footer from '../footer/footer';
import Header from '../header/header';
import Navigate from '../navigate/navigate';
import { AppRoute, PosterParams, ScreenType } from '../../const';
import FilmCatalog from '../film-catalog/film-catalog';
import Poster from '../poster/poster';
import MovieInfo from '../movie-info/movie-info';
import { useSelector } from 'react-redux';
import {
  getAllFilms,
  getCurrentComments,
  getCurrentFilm
} from '../../store/app-data/selectors-app-data';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { fetchFilmScreenData } from '../../store/api-actions';
import { useNavigate, useParams } from 'react-router-dom';
import { resetMovieInfo } from '../../store/app-process/slice-app-process';
import { unwrapResult } from '@reduxjs/toolkit';
import { resetScreenData } from '../../store/app-data/slice-app-data';

function ScreenFilm(): JSX.Element | null {
  const navigate = useNavigate();
  const { id: pathId } = useParams();
  const dispatch = useAppDispatch();
  const films = useSelector(getAllFilms);
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
    dispatch(fetchFilmScreenData(pathId || ''))
      .then(unwrapResult)
      .catch(() => navigate(AppRoute.NotFound));
    return () => {
      dispatch(resetMovieInfo());
      dispatch(resetScreenData());
    };
  }, [pathId, dispatch, navigate]);

  if (!id) {
    return null;
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
