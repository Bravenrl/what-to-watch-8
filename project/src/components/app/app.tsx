import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import AuthorizedRoute from '../../hoc/authorized-route/authorized-route';
import RequireAuthRoute from '../../hoc/require-auth-route/require-auth-route';
import { getAuthStatus } from '../../store/user-process/selectors-user-process';
import Preloader from '../preloader/preloader';
import ScreenAddReview from '../screen-add-review/screen-add-review';
import ScreenFilm from '../screen-film/screen-film';
import ScreenMain from '../screen-main/screen-main';
import ScreenMyList from '../screen-my-list/screen-my-list';
import ScreenNotFound from '../screen-not-found/screen-not-found';
import ScreenPlayer from '../screen-player/screen-player';
import ScreenSignIn from '../screen-sign-in/screen-sign-in';

function App(): JSX.Element {
  const isAutnUnknown = useSelector(getAuthStatus) === AuthStatus.Unknown;

  return isAutnUnknown ? (
    <Preloader />
  ) : (
    <Routes>
      <Route path={AppRoute.Root} element={<ScreenMain />} />
      <Route path={AppRoute.Film} element={<ScreenFilm />} />
      <Route
        path={AppRoute.MyList}
        element={
          <RequireAuthRoute>
            <ScreenMyList />
          </RequireAuthRoute>
        }
      />
      <Route
        path={AppRoute.SignIn}
        element={
          <AuthorizedRoute>
            <ScreenSignIn />
          </AuthorizedRoute>
        }
      />
      <Route path={AppRoute.Player} element={<ScreenPlayer />} />
      <Route
        path={AppRoute.AddReview}
        element={
          <RequireAuthRoute>
            <ScreenAddReview />
          </RequireAuthRoute>
        }
      />
      <Route path={AppRoute.NotFound} element={<ScreenNotFound />} />
    </Routes>
  );
}

export default App;
