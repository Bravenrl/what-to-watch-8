import { HeaderTitle, ScreenType } from '../../const';
import Footer from '../footer/footer';
import Header from '../header/header';

function ScreenSignIn(): JSX.Element {
  return (
    <div className="user-page">
      <Header screenType={ScreenType.SignIn}>
        <h1 className="page-title user-page__title"> {HeaderTitle.SignIn} </h1>
      </Header>
      <div className="sign-in user-page__content">
        {/* <div class="sign-in__message">
          <p>We can’t recognize this email <br> and password combination. Please try again.</p>
          <p>Please enter a valid email address</p>
        </div> */}
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field "> {/* sign-in__field--error */}
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default ScreenSignIn;
