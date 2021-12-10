import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, LogoPosition, ScreenType } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAuth } from '../../hooks/use-auth';
import { logoutAction } from '../../store/api-actions';
import { getAvatarUrl } from '../../store/user-process/selectors-user-process';
import Logo from '../logo/logo';

type HeaderProps = {
  screenType: string;
  children?: React.ReactNode;
};

function Header({ screenType, children }: HeaderProps): JSX.Element {
  const avatarUrl = useSelector(getAvatarUrl);
  const isAuth = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <header
      className={classNames('page-header', {
        'film-card__head':
          isAuth && (screenType === ScreenType.Main || ScreenType.Movie),
        'user-page__head':
          screenType === ScreenType.SignIn || ScreenType.MyList,
      })}
    >
      <Logo logoPosition={LogoPosition.Header} />
      {children}
      {isAuth
        ? screenType !== ScreenType.SignIn && (
          <ul className='user-block'>
            <li
              className='user-block__item'
              onClick={() => {
                navigate(AppRoute.MyList);
              }}
            >
              <div className='user-block__avatar'>
                <img
                  src={avatarUrl}
                  alt='User avatar'
                  width='63'
                  height='63'
                />
              </div>
            </li>
            <li className='user-block__item'>
              <a
                className='user-block__link'
                href='#todo'
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutAction());
                }}
              >
                  Sign out
              </a>
            </li>
          </ul>
        )
        : screenType !== ScreenType.SignIn && (
          <div className='user-block'>
            <Link to={AppRoute.SignIn} className='user-block__link'>
                Sign in
            </Link>
          </div>
        )}
    </header>
  );
}

export default Header;
