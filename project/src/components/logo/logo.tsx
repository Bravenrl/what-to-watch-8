import classNames from 'classnames';
import { Link } from 'react-router-dom';


import { AppRoute, LogoLocation } from '../../const';

type LogoType = {
  logoLocation: LogoLocation;
}

function Logo({ logoLocation }: LogoType): JSX.Element {
  return (
    <div className="logo">
      <Link
        className={
          classNames(
            'logo__link',
            { 'logo__link--light': (logoLocation === LogoLocation.Footer) },
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
