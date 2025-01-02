import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setOffers } from '@store/actions';
import Header from '@components/Header/Header';
import Map from '@components/Map/Map';
import OffersList from '@components/OffersList/OffersList';
import { LocationsTabs } from '@components/LocationsTabs/LocationsTabs';
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

  const [offersPoints, setOffersPoints] = useState<Point[]>(
    offersToPoints(offers)
  );

  useEffect(() => {
    setOffersPoints(offersToPoints(offers));
  }, [offers]);

  const [activePoint] = useState(undefined);
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
              {/* <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form> */}
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offers} type="Main" />
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
