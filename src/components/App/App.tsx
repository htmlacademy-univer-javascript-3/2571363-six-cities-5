import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '@pages/MainPage/MainPage';
import LoginPage from '@pages/LoginPage/LoginPage';
import FavoritesPage from '@pages/FavoritesPage/FavoritesPage';
import OfferPage from '@pages/OfferPage/OfferPage';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';
import AuthChecker from '@components/AuthChecker/AuthChecker';
import { TPlaceEntity } from '../PlaceCard/PlaceCard.typings/PlaceCard.typings';

type TAppProps = {
  places: TPlaceEntity[];
  favoritesPlaces: TPlaceEntity[];
};

function App({ places, favoritesPlaces }: TAppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage places={places} />} />
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
  );
}

export default App;
