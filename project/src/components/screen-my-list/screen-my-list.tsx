import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HeaderTitle, ScreenType } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { fetchMyListScreenData } from '../../store/api-actions';
import { getMyListFilms } from '../../store/app-data/selectors-app-data';
import { resetMyListFilms } from '../../store/app-data/slice-app-data';
import FilmCatalog from '../film-catalog/film-catalog';
import Footer from '../footer/footer';
import Header from '../header/header';

function ScreenMyList(): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useSelector(getMyListFilms);

  useEffect(() => {
    dispatch(fetchMyListScreenData());
    return () => {
      dispatch(resetMyListFilms());
    };
  }, [dispatch]);

  return (
    <div className='user-page'>
      <Header screenType={ScreenType.MyList}>
        <h1 className='page-title user-page__title'> {HeaderTitle.MyList} </h1>
      </Header>
      <FilmCatalog films={films} />
      <Footer />
    </div>
  );
}

export default ScreenMyList;
