import { Navigate, useLocation } from 'react-router-dom';
import { AppRoute, AUTH_STATUS } from '../../const';

type PrivateProps = {
  children : JSX.Element;
}

function RequireAuthRoute({ children }: PrivateProps): JSX.Element {
  const location = useLocation();

  if (!AUTH_STATUS) {
    return <Navigate to={AppRoute.SignIn} state={{ from: location }} />;
  }

  return children;
}

export default RequireAuthRoute;
