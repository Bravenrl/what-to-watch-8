import { Link } from 'react-router-dom';
import { AppRoute, HeaderTitle, LogoPosition } from '../../const';
import Footer from '../footer/footer';
import Logo from '../logo/logo';

function ScreenNotFound(): JSX.Element {
  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <Logo logoPosition={LogoPosition.Header} />
        <h1 className='page-title user-page__title'>{HeaderTitle.NotFound}</h1>
      </header>
      <div
        className='sign-in user-page__content'
        style={{ textAlign: 'center' }}
      >
        <Link
          to={AppRoute.Root}
          style={{
            fontSize: '22px',
            fontWeight: '500',
            color: '#c9b37e',
            textDecoration: 'none',
          }}
        >
          Return to home page
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default ScreenNotFound;
