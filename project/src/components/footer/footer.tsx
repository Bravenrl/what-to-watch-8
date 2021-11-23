import { LogoLocation } from '../../const';
import Logo from '../logo/logo';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo logoLocation={LogoLocation.Footer} />
      <div className="copyright">
        <p>© 2021 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
