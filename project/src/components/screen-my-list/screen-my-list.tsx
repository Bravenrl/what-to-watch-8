import { HeaderTitle, ScreenType } from '../../const';
import FilmCatalog from '../film-catalog/film-catalog';
import Footer from '../footer/footer';
import Header from '../header/header';

function ScreenMyList(): JSX.Element {
  return (
    <div className="user-page">
      <Header screenType={ScreenType.MyList}>
        <h1 className="page-title user-page__title"> {HeaderTitle.MyList} </h1>
      </Header>
      <FilmCatalog locationPage={ScreenType.MyList} />
      <Footer />
    </div>);
}

export default ScreenMyList;
