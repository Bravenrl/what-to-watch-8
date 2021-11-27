import classNames from 'classnames';
import { Link } from 'react-router-dom';


import { AppRoute, LogoPosition } from '../../const';

type LogoType = {
  logoPosition: LogoPosition;
}

function Logo({ logoPosition} : LogoType): JSX.Element {
  return (
    <div className="logo">
      <Link
        className={
          classNames(
            'logo__link',
            { 'logo__link--light': (logoPosition === LogoPosition.Footer) },
          )
        }
        to={AppRoute.Root}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
