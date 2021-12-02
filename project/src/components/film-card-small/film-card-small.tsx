import { useRef, useState } from 'react';
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

  // useEffect(() => {
  //   if (smallVideoRef.current === null) {
  //     return;
  //   }

  //   if (isPlaying) {
  //     timeout.current = setTimeout(() => {
  //       if (smallVideoRef.current !== null) {
  //         smallVideoRef.current.play();
  //         // eslint-disable-next-line no-console
  //         console.log('play');
  //       }
  //     }, 1000);
  //   }

  //   if ((timeout.current !== null) && (!isPlaying)) {
  //     smallVideoRef.current.pause();
  //     clearTimeout(timeout.current);
  //     //smallVideoRef.current.src = '';
  //     // // eslint-disable-next-line no-console
  //     // smallVideoRef.current.onerror = () => console.log('err');
  //     //smallVideoRef.current.removeAttribute('src');
  //     // eslint-disable-next-line no-console
  //     console.log('stop');
  //   }

  // }, [isPlaying]);


  return (
    <article className="small-film-card catalog__films-card"
      onClick={() => (navigate(path))}
      onMouseEnter={() => timeout.current = setTimeout(() => {
        setIsPlaying(true);
      }, 1000)}
      onMouseLeave={() => { setIsPlaying(false); if (timeout.current !== null) { clearTimeout(timeout.current); } }}
    >
      <div className="small-film-card__image">
        {(isPlaying)
          ?
          <video
            className="player__video"
            ref={smallVideoRef}
            poster={previewImage}
            width={PreviewSize.Width}
            height={PreviewSize.Height}
            muted
            autoPlay
            src={previewVideoLink}
          >
          </video>
          :
          <img src={previewImage} alt={name} width="280" height="175" />}
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
