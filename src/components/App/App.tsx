import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '@pages/MainPage/MainPage';
import LoginPage from '@pages/LoginPage/LoginPage';
import FavoritesPage from '@pages/FavoritesPage/FavoritesPage';
import OfferPage from '@pages/OfferPage/OfferPage';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';
import AuthChecker from '@components/AuthChecker/AuthChecker';
import useAppInit from '@utils/useInitApp/useInitApp';

function App(): JSX.Element {
  useAppInit();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/favorites"
          element={
            <AuthChecker
              element={<FavoritesPage places={[]} />}
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
