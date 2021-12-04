import Header from '../header/header';
import Navigate from '../navigate/navigate';
import { PosterParams, ScreenType } from '../../const';
import Poster from '../poster/poster';
import { CreateFakeFilm } from '../../mock/fake-data';
import ReviewForm from '../review-form/review-form';

function ScreenAddReview(): JSX.Element {
  const film = CreateFakeFilm();
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
