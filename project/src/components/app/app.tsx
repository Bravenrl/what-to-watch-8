import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import AuthorizedRoute from '../../hoc/authorized-route/authorized-route';
import RequireAuthRoute from '../../hoc/require-auth-route/require-auth-route';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';
import MovieReviews from '../movie-reviews/movie-reviews';
import ScreenAddReview from '../screen-add-review/screen-add-review';
import ScreenFilm from '../screen-film/screen-film';
import ScreenMain from '../screen-main/screen-main';
import ScreenMyList from '../screen-my-list/screen-my-list';
import ScreenNotFound from '../screen-not-found/screen-not-found';
import ScreenPlayer from '../screen-player/screen-player';
import ScreenSignIn from '../screen-sign-in/screen-sign-in';

function App(): JSX.Element {
  return (
    <Routes >
      <Route path={AppRoute.Root} element={<ScreenMain />} />
      <Route path={AppRoute.Film} element={<ScreenFilm />} >
        <Route index element={<MovieOverview />} />
        <Route path={AppRoute.MovieDetails} element={<MovieDetails />} />
        <Route path={AppRoute.MovieReviews} element={<MovieReviews />} />
      </Route>
      <Route path={AppRoute.MyList} element={
        <RequireAuthRoute >
          <ScreenMyList />
        </RequireAuthRoute >
      }
      />
      <Route path={AppRoute.SignIn} element={
        <AuthorizedRoute >
          <ScreenSignIn />
        </AuthorizedRoute>
      }
      />
      <Route path={AppRoute.Player} element={<ScreenPlayer />} />
      <Route path={AppRoute.AddReview} element={<ScreenAddReview />} />
      <Route path={AppRoute.NotFound} element={<ScreenNotFound />} />
    </Routes>
  );
}

export default App;
