import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import FilmCard from '../film-card/film-card';
import FilmDesc from '../film-desc/film-desc';
import Footer from '../footer/footer';
import Header from '../header/header';
import MovieNav from '../movie-nav/movie-nav';
import { PosterParams, ScreenType } from '../../const';
import FilmCatalog from '../film-catalog/film-catalog';
import Poster from '../poster/poster';
import FilmInfo from '../film-info/film-info';

function ScreenFilm(): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <Poster type={PosterParams.TypeBackground} />
          <Header screenType={ScreenType.Movie} />
          <div className="film-card__wrap">
            <FilmDesc >
              <FilmCard />
              <FilmCardButtons />
            </FilmDesc>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <Poster type={PosterParams.TypePoster} size={PosterParams.SizeBig} />
            <FilmDesc>
              <MovieNav locationScreen={ScreenType.Movie} />
              <FilmInfo />
            </FilmDesc>
          </div>
        </div>
      </section>
      <div className="page-content">
        <FilmCatalog locationPage={ScreenType.Movie} />
        <Footer />
      </div>
    </>
  );
}

export default ScreenFilm;
