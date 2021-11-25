import classNames from 'classnames';
import { LogoLocation, ScreenType } from '../../const';
import Logo from '../logo/logo';

type HeaderProps = {
  screenType: string,
  children?: React.ReactNode,
}

export const AUTH = false;
function Header({ screenType, children}: HeaderProps): JSX.Element {

  return (
    <header className={
      classNames(
        'page-header',
        {
          'film-card__head': (AUTH)&&(screenType === ScreenType.Main||ScreenType.Movie),
          'user-page__head': (screenType === ScreenType.SignIn || ScreenType.MyList),
        })
    }
    >
      <Logo logoLocation={LogoLocation.Header} />
      {children}
      {
        (AUTH)
          ?
          (screenType !== ScreenType.SignIn) &&
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="#todo">Sign out</a>
            </li>
          </ul>
          :
          (screenType !== ScreenType.SignIn) &&
          <div className="user-block">
            <a href="#todo" className="user-block__link">Sign in</a>
          </div>
      }

    </header>
  );
}


export default Header;
