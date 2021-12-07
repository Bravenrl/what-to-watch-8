import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import FilmCard from '../film-card/film-card';
import FilmDesc from '../film-desc/film-desc';
import Footer from '../footer/footer';
import Header from '../header/header';
import { PosterParams, ScreenType } from '../../const';
import FilmCatalog from '../film-catalog/film-catalog';
import Poster from '../poster/poster';
import { useSelector } from 'react-redux';
import {
  resetPromoFilm
} from '../../store/app-data/slice-app-data';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { getAllFilms, getPromoFilm } from '../../store/app-data/selectors-app-data';
import Preloader from '../preloader/preloader';
import { fetchMainScreenData } from '../../store/api-actions';


function ScreenMain(): JSX.Element {
  const dispatch = useAppDispatch();
  const {
    id,
    name,
    genre,
    released,
    posterImage,
    backgroundImage,
  } = useSelector(getPromoFilm);

  const films = useSelector(getAllFilms);

  useEffect(() => {
    dispatch(fetchMainScreenData());
    return () => {
      dispatch(resetPromoFilm());
    };
  }, [dispatch]);

  if (!id||films.length===0) {
    return <Preloader />;
  }

  return (
    <>
      <section className='film-card'>
        <Poster
          type={PosterParams.TypeBackground}
          image={backgroundImage}
          name={name}
        />
        <Header screenType={ScreenType.Main} />
        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <Poster
              type={PosterParams.TypePoster}
              image={posterImage}
              name={name}
            />
            <FilmDesc>
              <FilmCard name={name} genre={genre} released={released} />
              <FilmCardButtons id={id} />
            </FilmDesc>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <FilmCatalog films = {films}/>
        <Footer />
      </div>
    </>
  );
}

export default ScreenMain;
