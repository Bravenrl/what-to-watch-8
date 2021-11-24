import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import FilmCard from '../film-card/film-card';
import FilmDesc from '../film-desc/film-desc';
import Footer from '../footer/footer';
import GenresList from '../genres-list/genres-list';
import Header from '../header/header';
import ShowMoreButton from '../show-more-button/show-more-button';
import FilmCardSmall from '../film-card-small/film-card-small';

function ScreenMain(): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <FilmDesc >
              <FilmCard />
              <FilmCardButtons />
            </FilmDesc>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <div className="catalog__films-list">
            <FilmCardSmall />
          </div>
          <ShowMoreButton />
        </section>
        <Footer />
      </div>

    </>
  );
}

export default ScreenMain;
