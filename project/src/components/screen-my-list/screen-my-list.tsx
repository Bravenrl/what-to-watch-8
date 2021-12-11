import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HeaderTitle, ScreenType } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { fetchMyListScreenData } from '../../store/api-actions';
import { getIsDataLoading } from '../../store/app-data/selectors-app-data';
import FilmCatalog from '../film-catalog/film-catalog';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preloader from '../preloader/preloader';

function ScreenMyList(): JSX.Element {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getIsDataLoading);

  useEffect(() => {
    dispatch(fetchMyListScreenData());
  }, [dispatch]);

  if (isLoading) {
    return <Preloader/>;
  }

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
