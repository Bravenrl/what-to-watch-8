import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AUTH_STATUS, LogoPosition, ScreenType } from '../../const';
import { fakeAuthor } from '../../mock/fake-data';
import Logo from '../logo/logo';

type HeaderProps = {
  screenType: string,
  children?: React.ReactNode,
}

function Header({ screenType, children }: HeaderProps): JSX.Element {
  const {avatarUrl} = fakeAuthor();
  const navigate = useNavigate();
  return (
    <header className={
      classNames(
        'page-header',
        {
          'film-card__head': (AUTH_STATUS) && (screenType === ScreenType.Main || ScreenType.Movie),
          'user-page__head': (screenType === ScreenType.SignIn || ScreenType.MyList),
        })
    }
    >
      <Logo logoPosition={LogoPosition.Header} />
      {children}
      {
        (AUTH_STATUS)
          ?
          (screenType !== ScreenType.SignIn) &&
          <ul className="user-block">
            <li className="user-block__item" onClick={()=>{navigate(AppRoute.MyList);}}>
              <div className="user-block__avatar">
                <img src={avatarUrl} alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="#todo">Sign out</a>
            </li>
          </ul>
          :
          (screenType !== ScreenType.SignIn) &&
    <div className="user-block">
      <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
    </div>
      }

    </header >
  );
}


export default Header;
