const MOVIE_NAV = ['Overview', 'Details', 'Reviews'];

function MovieNav(): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {MOVIE_NAV.map((item) =>
          (
            <li key={item} className="film-nav__item film-nav__item--active">
              <a href="#todo" className="film-nav__link">{item}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default MovieNav;
