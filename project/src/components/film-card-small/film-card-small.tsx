import { useRef, useState } from 'react';
import { generatePath, Link, useNavigate } from 'react-router-dom';
import { AppRoute, PreviewSize, TIMEOUT_TIME } from '../../const';

type FilmCardSmallProps = {
  id: number;
  name: string;
  previewImage: string;
  previewVideoLink: string;
};

function FilmCardSmall({
  id,
  name,
  previewImage,
  previewVideoLink,
}: FilmCardSmallProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);

  const smallVideoRef = useRef<HTMLVideoElement | null>(null);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const navigate = useNavigate();
  const path = generatePath(AppRoute.Film, { id: id.toString() });

  return (
    <article
      className='small-film-card catalog__films-card'
      onClick={() => navigate(path)}
      onMouseEnter={() => {
        timeout.current = setTimeout(() => {
          setIsPlaying(true);
        }, TIMEOUT_TIME);
      }}
      onMouseLeave={() => {
        setIsPlaying(false);
        if (timeout.current !== null) {
          clearTimeout(timeout.current);
        }
      }}
    >
      <div className='small-film-card__image'>
        {isPlaying ? (
          <video
            className='player__video'
            ref={smallVideoRef}
            poster={previewImage}
            width={PreviewSize.Width}
            height={PreviewSize.Height}
            muted
            autoPlay
            src={previewVideoLink}
          >
          </video>
        ) : (
          <img
            src={previewImage}
            alt={name}
            width={PreviewSize.Width}
            height={PreviewSize.Height}
          />
        )}
      </div>
      <h3 className='small-film-card__title'>
        <Link className='small-film-card__link' to={path}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCardSmall;
