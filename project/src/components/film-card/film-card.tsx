type FilmCardProps = {
  name: string,
  genre: string,
  released: number,
}

function FilmCard({name, genre, released}: FilmCardProps): JSX.Element {
  return (
    <>
      <h2 className="film-card__title">{name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{released}</span>
      </p>
    </>
  );
}

export default FilmCard;
