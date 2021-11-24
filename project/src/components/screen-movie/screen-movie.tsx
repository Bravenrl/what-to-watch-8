import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import FilmCard from '../film-card/film-card';
import FilmDesc from '../film-desc/film-desc';
import Footer from '../footer/footer';
import Header from '../header/header';
// import MovieDetails from '../movie-details/movie-details';
import MovieNav from '../movie-nav/movie-nav';
import MovieOverview from '../movie-overview/movie-overview';
// import MovieReviews from '../movie-reviews/movie-reviews';
import FilmCardSmall from '../film-card-small/film-card-small';

function ScreenMovie(): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="film-card__wrap">

            <FilmDesc >
              <FilmCard />
              <FilmCardButtons>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </FilmCardButtons>
            </FilmDesc>

          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <FilmDesc>
              <MovieNav />
              <MovieOverview />
              {/* <MovieReviews />
              <MovieDetails /> */}
            </FilmDesc>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <FilmCardSmall />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default ScreenMovie;
