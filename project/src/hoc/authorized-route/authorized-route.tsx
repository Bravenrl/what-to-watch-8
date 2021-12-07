import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAuth } from '../../hooks/use-auth';

type AuthorizedRouteProps = {
  children: JSX.Element;
}

function AuthorizedRoute({ children }: AuthorizedRouteProps): JSX.Element {
  const isAuth = useAuth();
  if (isAuth) {
    return <Navigate to={AppRoute.Root} />;
  }
  return children;
}

export default AuthorizedRoute;
