import { useEffect } from 'react';
import { HeaderTitle, ScreenType } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { fetchMyListScreenData } from '../../store/api-actions';
import { resetScreenData } from '../../store/app-data/slice-app-data';
import FilmCatalog from '../film-catalog/film-catalog';
import Footer from '../footer/footer';
import Header from '../header/header';

function ScreenMyList(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMyListScreenData());
  }, [dispatch]);

  return (
    <div className='user-page'>
      <Header screenType={ScreenType.MyList}>
        <h1 className='page-title user-page__title'> {HeaderTitle.MyList} </h1>
      </Header>
      <FilmCatalog />
      <Footer />
    </div>
  );
}

export default ScreenMyList;
