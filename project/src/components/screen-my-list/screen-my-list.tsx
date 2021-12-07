import { useSelector } from 'react-redux';
import { HeaderTitle, ScreenType } from '../../const';
import { getAllFilms } from '../../store/app-data/selectors-app-data';
import FilmCatalog from '../film-catalog/film-catalog';
import Footer from '../footer/footer';
import Header from '../header/header';

function ScreenMyList(): JSX.Element {
  const films = useSelector(getAllFilms);
  return (
    <div className="user-page">
      <Header screenType={ScreenType.MyList}>
        <h1 className="page-title user-page__title"> {HeaderTitle.MyList} </h1>
      </Header>
      <FilmCatalog films = {films}/>
      <Footer />
    </div>);
}

export default ScreenMyList;
