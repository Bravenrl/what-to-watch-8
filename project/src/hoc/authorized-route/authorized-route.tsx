import { Navigate } from 'react-router-dom';
import { AppRoute, AUTH_STATUS } from '../../const';

type AuthorizedRouteProps = {
  children: JSX.Element;
}

function AuthorizedRoute({ children }: AuthorizedRouteProps): JSX.Element {

  if (AUTH_STATUS) {
    return <Navigate to={AppRoute.Root} />;
  }
  return children;
}

export default AuthorizedRoute;
