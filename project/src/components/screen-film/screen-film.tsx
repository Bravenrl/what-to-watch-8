import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import FilmCard from '../film-card/film-card';
import FilmDesc from '../film-desc/film-desc';
import Footer from '../footer/footer';
import Header from '../header/header';
import Navigate from '../navigate/navigate';
import { PosterParams, ScreenType } from '../../const';
import FilmCatalog from '../film-catalog/film-catalog';
import Poster from '../poster/poster';
import { fakeComments, CreateFakeFilm } from '../../mock/fake-data';
import MovieInfo from '../movie-info/movie-info';

function ScreenFilm(): JSX.Element {
  const film = CreateFakeFilm();
  const {
    id,
    name,
    genre,
    released,
    posterImage,
    backgroundImage,
    backgroundColor,
    isFavorite,
  } = film;

  return (
    <>
      <section className="film-card film-card--full" style={{ backgroundColor }}>
        <div className="film-card__hero">
          <Poster type={PosterParams.TypeBackground} image={backgroundImage} name={name} />
          <Header screenType={ScreenType.Movie} />
          <div className="film-card__wrap">
            <FilmDesc >
              <FilmCard name={name} genre={genre} released={released} />
              <FilmCardButtons isFavorite={isFavorite} id={id} />
            </FilmDesc>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <Poster type={PosterParams.TypePoster} size={PosterParams.SizeBig} image={posterImage} name={name} />
            <FilmDesc>
              <Navigate />
              <MovieInfo film={film} comments={fakeComments} />
            </FilmDesc>
          </div>
        </div>
      </section>
      <div className="page-content">
        <FilmCatalog />
        <Footer />
      </div>
    </>
  );
}

export default ScreenFilm;
