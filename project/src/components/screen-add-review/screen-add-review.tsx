import Header from '../header/header';
import Navigate from '../navigate/navigate';
import { PosterParams, ScreenType } from '../../const';
import Poster from '../poster/poster';
import ReviewForm from '../review-form/review-form';
import { useSelector } from 'react-redux';
import { getCurrentFilm } from '../../store/app-data/selectors-app-data';

function ScreenAddReview(): JSX.Element {
  const film = useSelector(getCurrentFilm);
  const { name, posterImage, backgroundImage } = film;

  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <Poster
          type={PosterParams.TypeBackground}
          image={backgroundImage}
          name={name}
        />
        <Header screenType={ScreenType.AddReview}>
          <Navigate />
        </Header>
        <Poster
          type={PosterParams.TypePoster}
          size={PosterParams.SizeSmall}
          image={posterImage}
          name={name}
        />
      </div>

      <div className='add-review'>
        <ReviewForm />
      </div>
    </section>
  );
}

export default ScreenAddReview;
