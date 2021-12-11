import { useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAuth } from '../../hooks/use-auth';

type AuthorizedRouteProps = {
  children: JSX.Element;
}

function AuthorizedRoute({ children }: AuthorizedRouteProps): JSX.Element {
  const isAuth = useAuth();
  const location = useLocation();
  const navigatePath = location.state?.from?.pathname ?? AppRoute.Root;
  if (isAuth) {
    return <Navigate to={navigatePath} replace/>;
  }
  return children;
}

export default AuthorizedRoute;
