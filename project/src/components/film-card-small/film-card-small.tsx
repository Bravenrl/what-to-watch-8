import { useEffect, useRef, useState } from 'react';
import { generatePath, Link, useNavigate } from 'react-router-dom';
import { AppRoute, PreviewSize } from '../../const';

type FilmCardSmallProps = {
  id: number,
  name: string,
  previewImage: string,
  previewVideoLink: string,
}
function FilmCardSmall({ id, name, previewImage, previewVideoLink }: FilmCardSmallProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const smallVideoRef = useRef<HTMLVideoElement | null>(null);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const path = generatePath(AppRoute.Film, { id: id.toString() });

  useEffect(() => {
    if (smallVideoRef.current === null) {
      return;
    }

    if (isPlaying) {
      smallVideoRef.current.src = previewVideoLink;
      timeout.current = setTimeout(() => {
        smallVideoRef.current?.play();
      }, 1000);
    }

    if ((timeout.current !== null) && (!isPlaying)) {
      clearTimeout(timeout.current);
      smallVideoRef.current.pause();
      smallVideoRef.current.src = '';
      smallVideoRef.current.removeAttribute('src');
    }

  }, [isPlaying, previewVideoLink]);


  return (
    <article className="small-film-card catalog__films-card"
      onClick={() => (navigate(path))}
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
    >
      <div className="small-film-card__image">
        <video
          className="player__video"
          ref={smallVideoRef}
          poster={previewImage}
          width={PreviewSize.Width}
          height={PreviewSize.Height}
          muted
          preload='none'
        >
        </video>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link"
          to={path}
        >
          {name}
        </Link>
      </h3>
    </article >
  );
}

export default FilmCardSmall;
