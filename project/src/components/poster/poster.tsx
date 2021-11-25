import { PosterParams } from '../../const';
import { PosterSize, PosterType } from '../../types/const';

type PosterProps = {
  type: PosterType,
  size?: PosterSize,
}

function Poster({ type, size }: PosterProps): JSX.Element {
  const isBackgroundPoster = (type === PosterParams.TypeBackground);
  return (
    <>
      <div className={`film-card__${type} ${(!isBackgroundPoster && size) ? `film-card__poster--${size}` : ''}`}>
        <img src="img/is-the-grand-budapest-hotel.jpg"
          alt={`The Grand Budapest Hotel ${type}`}
          width={isBackgroundPoster ? '' : '218'}
          height={isBackgroundPoster ? '' : '327'}
        />
      </div>
      {isBackgroundPoster && <h1 className="visually-hidden">WTW</h1>}
    </>
  );
}

export default Poster;

