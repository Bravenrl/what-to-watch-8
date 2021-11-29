import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CreateFakeFilm } from '../../mock/fake-data';
import { formatRunTimeForPlayer } from '../../utils';

function ScreenPlayer(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.player?.pathname || AppRoute.Root;
  const film = CreateFakeFilm();
  const { name, posterImage, runTime, videoLink } = film;
  const [played, setРlayed] = useState(true);
  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster={posterImage}></video>
      <button type="button" onClick={() => navigate(fromPage)} className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">{formatRunTimeForPlayer(runTime)}</div>
        </div>

        <div className="player__controls-row">
          {
            <button type="button" className="player__play" onClick={()=>setРlayed(()=>!played)}>
              <svg viewBox={(played) ? '0 0 14 21' : '0 0 19 19'} width={(played) ? 14 : 19} height={(played) ? 21 : 19}>
                <use xlinkHref={(played) ? '#pause' : '#play-s'}></use>
              </svg>
              <span>{(played) ? 'Pause' : 'Play'}</span>
            </button>
          }
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScreenPlayer;
