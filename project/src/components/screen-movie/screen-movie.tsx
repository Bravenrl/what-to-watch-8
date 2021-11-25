import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import FilmCard from '../film-card/film-card';
import FilmDesc from '../film-desc/film-desc';
import Footer from '../footer/footer';
import Header from '../header/header';
// import MovieDetails from '../movie-details/movie-details';
import MovieNav from '../movie-nav/movie-nav';
import MovieOverview from '../movie-overview/movie-overview';
// import MovieReviews from '../movie-reviews/movie-reviews';
import { PosterParams, ScreenType } from '../../const';
import FilmCatalog from '../film-catalog/film-catalog';
import Poster from '../poster/poster';

function ScreenMovie(): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <Poster type={PosterParams.TypeBackground} />
          <Header screenType={ScreenType.Movie} />
          <div className="film-card__wrap">
            <FilmDesc >
              <FilmCard />
              <FilmCardButtons locationPage={ScreenType.Movie} />
            </FilmDesc>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <Poster type={PosterParams.TypePoster} size={PosterParams.SizeBig} />

            <FilmDesc>
              <MovieNav locationScreen={ScreenType.Movie} />
              <MovieOverview />
              {/* <MovieReviews />
              <MovieDetails /> */}
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

export default ScreenMovie;
