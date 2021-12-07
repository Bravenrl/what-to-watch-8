import { Navigate, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAuth } from '../../hooks/use-auth';

type PrivateProps = {
  children : JSX.Element;
}

function RequireAuthRoute({ children }: PrivateProps): JSX.Element {
  const location = useLocation();
  const isAuth = useAuth();
  if (!isAuth) {
    return <Navigate to={AppRoute.SignIn} state={{ from: location }} />;
  }
  return children;
}

export default RequireAuthRoute;
