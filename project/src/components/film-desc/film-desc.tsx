type FilmDescProps = {
  children: JSX.Element[],
}

function FilmDesc ({children}: FilmDescProps):JSX.Element {
  return (
    <div className="film-card__desc">
      {children}
    </div>
  );
}

export default FilmDesc;
