import classNames from 'classnames';
import { LogoLocation } from '../../const';

type LogoType = {
  logoLocation: LogoLocation;
}

function Logo({ logoLocation }: LogoType): JSX.Element {
  return (
    <div className="logo">
      <a
        className={
          classNames(
            'logo__link',
            {'logo__link--light': (logoLocation === LogoLocation.Footer)},
          )
        }
        href="/"
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

export default Logo;
