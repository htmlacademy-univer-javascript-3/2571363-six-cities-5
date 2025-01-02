import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import MainPage from '@pages/MainPage/MainPage';
import LoginPage from '@pages/LoginPage/LoginPage';
import FavoritesPage from '@pages/FavoritesPage/FavoritesPage';
import OfferPage from '@pages/OfferPage/OfferPage';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';
import AuthChecker from '@components/AuthChecker/AuthChecker';
import { TPlaceEntity } from '../PlaceCard/PlaceCard.typings/PlaceCard.typings';

type TAppProps = {
  favoritesPlaces: TPlaceEntity[];
};

function App({ favoritesPlaces }: TAppProps): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/favorites"
            element={
              <AuthChecker
                element={<FavoritesPage places={favoritesPlaces} />}
                isAuthorized={false}
              />
            }
          />
          <Route path="/offer/:id" element={<OfferPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
