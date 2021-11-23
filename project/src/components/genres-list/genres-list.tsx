export const GENRES: string[] = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers'];

function GenresList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {
        GENRES.map((genre) =>
          (
            < li key={genre} className="catalog__genres-item catalog__genres-item--active" >
              <a href="#todo" className="catalog__genres-link">{genre}</a>
            </li>
          ))
      }
    </ul >
  );
}

export default GenresList;
