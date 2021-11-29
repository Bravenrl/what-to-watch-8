import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import FilmCard from '../film-card/film-card';
import FilmDesc from '../film-desc/film-desc';
import Footer from '../footer/footer';
import Header from '../header/header';
import { PosterParams, ScreenType } from '../../const';
import FilmCatalog from '../film-catalog/film-catalog';
import Poster from '../poster/poster';
import { fakeFilm } from '../../mock/fake-data';

function ScreenMain(): JSX.Element {
  const film = fakeFilm();
  const {
    // id,
    name,
    // description,
    // rating,
    // director,
    // starring,
    genre,
    released,
    posterImage,
    // previewImage,
    backgroundImage,
    // backgroundColor,
    // videoLink,
    // previewVideoLink,
    // scoresCount,
    isFavorite,
    // runTime,
  } = film;

  return (
    <>
      <section className="film-card">
        <Poster type={PosterParams.TypeBackground} image={backgroundImage} name={name} />
        <Header screenType={ScreenType.Main} />
        <div className="film-card__wrap">
          <div className="film-card__info">
            <Poster type={PosterParams.TypePoster} image={posterImage} name={name} />
            <FilmDesc >
              <FilmCard name={name} genre={genre} released={released} />
              <FilmCardButtons isFavorite={isFavorite} />
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

export default ScreenMain;
