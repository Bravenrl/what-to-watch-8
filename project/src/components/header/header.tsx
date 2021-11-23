import { LogoLocation } from '../../const';
import Logo from '../logo/logo';

export const AUTH = true;
function Header(): JSX.Element {
  return (
    <header className="page-header film-card__head">
      <Logo logoLocation={LogoLocation.Header} />

      {/* {(pageType = my-list) && <h1 class="page-title user-page__title">My list</h1>} */}

      {
        (AUTH)
          ?
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
          <div className="user-block">
            <a href="#todo" className="user-block__link">Sign in</a>
          </div>
      }

    </header>
  );
}


export default Header;
