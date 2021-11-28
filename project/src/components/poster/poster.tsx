import { PosterParams } from '../../const';
import { PosterSize, PosterType } from '../../types/const';

type PosterProps = {
  type: PosterType,
  size?: PosterSize,
  image: string,
  name: string,
}

function Poster({ type, size, image, name }: PosterProps): JSX.Element {
  const isBackgroundPoster = (type === PosterParams.TypeBackground);
  return (
    <>
      <div className={`film-card__${type} ${(!isBackgroundPoster && size) ? `film-card__poster--${size}` : ''}`}>
        <img src={image}
          alt={`${name} ${type}`}
          width={isBackgroundPoster ? '' : '218'}
          height={isBackgroundPoster ? '' : '327'}
        />
      </div>
      {isBackgroundPoster && <h1 className="visually-hidden">WTW</h1>}
    </>
  );
}

export default Poster;

