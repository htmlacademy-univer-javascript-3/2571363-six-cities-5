import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '@pages/MainPage/MainPage';
import LoginPage from '@pages/LoginPage/LoginPage';
import FavoritesPage from '@pages/FavoritesPage/FavoritesPage';
import OfferPage from '@pages/OfferPage/OfferPage';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import AuthChecker from '@components/AuthChecker/AuthChecker';
import useAppInit from '@utils/useInitApp/useInitApp';
import { APP_ROUTES } from '@services/constants';

function App(): JSX.Element {
  useAppInit();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.MAIN} element={<MainPage />} />
        <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
        <Route
          path={APP_ROUTES.FAVORITES}
          element={<AuthChecker element={<FavoritesPage places={[]} />} />}
        />
        <Route path={APP_ROUTES.OFFER(':id')} element={<OfferPage />} />
        <Route path="/*" element={<ErrorPage description="Error" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
