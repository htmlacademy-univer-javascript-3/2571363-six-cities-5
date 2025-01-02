import { useState, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setOffers } from '@store/actions';
import Header from '@components/Header/Header';
import Map from '@components/Map/Map';
import OffersList from '@components/OffersList/OffersList';
import { LocationsTabs } from '@components/LocationsTabs/LocationsTabs';
import SortingFilter from '@components/SortingFilter/SortingFilter';
import { SortOrder } from '@components/SortingFilter/SortingFilter.typings/SortingFilter.typings';
import getCityOffers from '@utils/getCityOffers/getCityOffers';
import offersToPoints from '@utils/offersToPoints/offersToPoints';
import { Point } from '@typings/City/City';

const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  useEffect(() => {
    dispatch(setOffers(getCityOffers(city)));
  }, [dispatch, city]);

  const [filter, setFilter] = useState<SortOrder>(SortOrder.POPULAR);
  const handleFilterChange = (newFilter: SortOrder) => {
    setFilter(newFilter);
  };

  const offersPoints = useMemo(() => offersToPoints(offers), [offers]);
  const [activePoint, setActivePoint] = useState<Point | undefined>(undefined);
  const handleOfferSelect = (point: Point | undefined) => {
    setActivePoint(point);
  };

  const sortedOffers = useMemo(() => {
    switch (filter) {
      case SortOrder.TOP_RATED:
        return offers.toSorted(
          (a, b) => b.rating.numericValue - a.rating.numericValue
        );
      case SortOrder.HIGH_TO_LOW:
        return offers.toSorted((a, b) => b.price.value - a.price.value);
      case SortOrder.LOW_TO_HIGH:
        return offers.toSorted((a, b) => a.price.value - b.price.value);
      default:
        return offers;
    }
  }, [offers, filter]);

  return (
    <div className="page page--gray page--main">
      <Header isAuth />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in {city.title}
              </b>
              <SortingFilter
                currentFilter={filter}
                onFilterChange={handleFilterChange}
              />
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={sortedOffers}
                  type="Main"
                  onOfferSelect={handleOfferSelect}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section
                className="cities__map map"
                style={{ background: 'none' }}
              >
                <Map
                  city={city}
                  points={offersPoints}
                  selectedPoint={activePoint}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
