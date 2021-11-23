import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import Footer from '../footer/footer';
import GenresList from '../genres-list/genres-list';
import Header from '../header/header';
import ShowMoreButton from '../show-more-button/show-more-button';
import SmallFilmCard from '../small-film-card/small-film-card';

function MainScreen(): JSX.Element {
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

            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>
              <FilmCardButtons />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <div className="catalog__films-list">
            <SmallFilmCard />
          </div>
          <ShowMoreButton />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
