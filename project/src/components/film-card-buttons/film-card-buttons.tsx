import { ScreenType } from '../../const';

type FilmCardButtonsType = {
  locationPage?: string,
};

function FilmCardButtons({ locationPage }: FilmCardButtonsType): JSX.Element {
  const isMoviePage = (locationPage === ScreenType.Movie);
  const isInList = false;
  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={isInList ? '#in-list' : '#add'}></use>
        </svg>
        <span>My list</span>
      </button>
      {isMoviePage && <a href="add-review.html" className="btn film-card__button">Add review</a>}
    </div>
  );
}

export default FilmCardButtons;
