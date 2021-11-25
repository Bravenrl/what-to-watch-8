import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import FilmCard from '../film-card/film-card';
import FilmDesc from '../film-desc/film-desc';
import Footer from '../footer/footer';
import Header from '../header/header';
import { PosterParams, ScreenType } from '../../const';
import FilmCatalog from '../film-catalog/film-catalog';
import Poster from '../poster/poster';

function ScreenMain(): JSX.Element {
  return (
    <>
      <section className="film-card">
        <Poster type={PosterParams.TypeBackground} />
        <Header screenType={ScreenType.Main} />
        <div className="film-card__wrap">
          <div className="film-card__info">
            <Poster type={PosterParams.TypePoster} />
            <FilmDesc >
              <FilmCard />
              <FilmCardButtons />
            </FilmDesc>
          </div>
        </div>
      </section>

      <div className="page-content">
        <FilmCatalog locationPage={ScreenType.Main} />
        <Footer />
      </div>

    </>
  );
}

export default ScreenMain;
