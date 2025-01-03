import { useState, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import Header from '@components/Header/Header';
import Map from '@components/Map/Map';
import OffersList from '@components/OffersList/OffersList';
import { LocationsTabs } from '@components/LocationsTabs/LocationsTabs';
import SortingFilter from '@components/SortingFilter/SortingFilter';
import { SortOrder } from '@components/SortingFilter/SortingFilter.typings/SortingFilter.typings';
import Spinner from '@components/Spinner/Spinner';
import { updateCityOffers } from '@store/actions';
import offersToPoints from '@utils/offersToPoints/offersToPoints';
import { Point } from '@typings/City/City';

const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { loading, city, cityOffers } = useAppSelector(
    (state) => state.offersSlice
  );

  useEffect(() => {
    if (!loading) {
      dispatch(updateCityOffers());
    }
  }, [dispatch, loading, city]);

  const [filter, setFilter] = useState<SortOrder>(SortOrder.POPULAR);
  const handleFilterChange = (newFilter: SortOrder) => {
    setFilter(newFilter);
  };

  const mapPoints = useMemo(() => offersToPoints(cityOffers), [cityOffers]);
  const [activePoint, setActivePoint] = useState<Point | undefined>(undefined);
  const handleOfferSelect = (point: Point | undefined) => {
    setActivePoint(point);
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsTabs />
        {loading ? (
          <Spinner variant="block" />
        ) : (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {cityOffers.length} places to stay in {city.name}
                </b>
                <SortingFilter
                  currentFilter={filter}
                  onFilterChange={handleFilterChange}
                />
                <OffersList
                  offers={cityOffers}
                  type="Main"
                  onOfferSelect={handleOfferSelect}
                />
              </section>
              <div className="cities__right-section">
                <section
                  className="cities__map map"
                  style={{ background: 'none' }}
                >
                  {' '}
                  <Map
                    city={city}
                    points={mapPoints}
                    selectedPoint={activePoint}
                  />
                </section>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MainPage;
