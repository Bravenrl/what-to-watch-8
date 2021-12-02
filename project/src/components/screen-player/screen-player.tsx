import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/data';
import { formatRunTimeForPlayer, isEscEvent, isSpaceEvent } from '../../utils';

type ScreenPlayerProps = {
  film: Film;
};

function ScreenPlayer({ film }: ScreenPlayerProps): JSX.Element {
  const { name, posterImage, videoLink } = film;

  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.player?.pathname || AppRoute.Root;

  const [isPlaying, setIsРlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [toggler, setToggler] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const barRef = useRef<HTMLProgressElement | null>(null);

  const handlerOnCangeProgress = () => {
    if (videoRef.current === null) {
      return;
    }
    if (isNaN(videoRef.current.duration)) {
      return;
    }
    setToggler(
      (videoRef.current.currentTime / videoRef.current.duration) * 100
    );
    setTimeLeft(videoRef.current.duration - videoRef.current.currentTime);
  };

  const handlerOnFullScreen = () => {
    if (videoRef.current === null) {
      return;
    }
    videoRef.current?.requestFullscreen();
  };

  const handlerKeydown = (evt: KeyboardEvent) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      navigate(fromPage);
      return;
    }
    if (isSpaceEvent(evt)) {
      evt.preventDefault();
      setIsРlaying((prevIsPlaying) => !prevIsPlaying);
    }
  };

  const handlerOnCliclProcess = (
    evt: React.MouseEvent<HTMLProgressElement, MouseEvent>
  ) => {
    if (barRef.current === null || videoRef.current === null) {
      return;
    }
    const currentWidth = barRef.current.parentElement?.offsetLeft
      ? evt.pageX - barRef.current.parentElement?.offsetLeft
      : evt.pageX;
    const widthPercent = currentWidth / barRef.current.offsetWidth;
    const nowTime = widthPercent * videoRef.current.duration;
    videoRef.current.currentTime = nowTime;
    setIsLoading(true);
  };

  useEffect(() => {
    document.addEventListener('keydown', handlerKeydown);
    return () => {
      document.removeEventListener('keydown', handlerKeydown);
    };
  });

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.oncanplay = () => setIsLoading(false);
    }
    return () => {
      if (videoRef.current !== null) {
        videoRef.current.oncanplay = null;
        videoRef.current = null;
      }
    };
  }, [videoLink]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }
    if (isPlaying) {
      videoRef.current.play();
      return;
    }
    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <div className='player'>
      <video
        src={videoLink}
        ref={videoRef}
        className='player__video'
        poster={posterImage}
        onTimeUpdate={handlerOnCangeProgress}
        onClick={() => setIsРlaying((prevIsPlaying) => !prevIsPlaying)}
      ></video>
      <button
        type='button'
        onClick={() => navigate(fromPage)}
        className='player__exit'
      >
        Exit
      </button>

      <div className='player__controls'>
        <div className='player__controls-row'>
          <div className='player__time'>
            <progress
              ref={barRef}
              onClick={handlerOnCliclProcess}
              className='player__progress'
              value={toggler}
              max='100'
            ></progress>
            <div className='player__toggler' style={{ left: `${toggler}%` }}>
              Toggler
            </div>
          </div>
          <div className='player__time-value'>
            {formatRunTimeForPlayer(timeLeft)}
          </div>
        </div>

        <div className='player__controls-row'>
          {
            <button
              type='button'
              disabled={isLoading}
              className='player__play'
              onClick={() => setIsРlaying((prevIsPlaying) => !prevIsPlaying)}
            >
              <svg
                viewBox={isPlaying ? '0 0 14 21' : '0 0 19 19'}
                width={isPlaying ? 14 : 19}
                height={isPlaying ? 21 : 19}
              >
                <use xlinkHref={isPlaying ? '#pause' : '#play-s'}></use>
              </svg>
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
          }
          <div className='player__name'>{isLoading ? 'load' : name}</div>

          <button
            type='button'
            onClick={handlerOnFullScreen}
            className='player__full-screen'
          >
            <svg viewBox='0 0 27 27' width='27' height='27'>
              <use xlinkHref='#full-screen'></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScreenPlayer;
