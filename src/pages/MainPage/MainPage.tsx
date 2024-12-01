import { useState, useEffect } from 'react';
import Header from '@components/Header/Header';
import Map from '@components/Map/Map';
import OffersList from '@components/OffersList/OffersList';
import { TPlaceEntity } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';
import { LocationsTabs } from '@components/LocationsTabs/LocationsTabs';
import { cities } from '@mocks/Cities/Cities';
import { getActiveOffers } from '@utils/getActiveOffers/getActiveOffers';
import { City, Point } from '../../types/City/City';

type TProps = {
  places: TPlaceEntity[];
};

const defaultCity = cities['Amsterdam'];

const MainPage = ({ places }: TProps): JSX.Element => {
  const [activeCity, setActiveCity] = useState(defaultCity);

  const [activeOffers, setActiveOffers] = useState<TPlaceEntity[]>(
    getActiveOffers(places, activeCity)
  );

  useEffect(() => {
    setActiveOffers(getActiveOffers(places, activeCity));
  }, [places, activeCity]);

  const getOffersPoints = (allPlaces: TPlaceEntity[]): Point[] => {
    const points: Point[] = [];
    allPlaces.map((offer) =>
      points.push({
        title: offer.name,
        lat: offer.latitude,
        lng: offer.longitude,
      })
    );
    return points;
  };

  const handleTabsClick = (city: City) => setActiveCity(city);

  const [offersPoints, setOffersPoints] = useState(getOffersPoints(places));

  useEffect(() => {
    setOffersPoints(getOffersPoints(activeOffers));
  }, [activeOffers]);

  const [activePoint] = useState(undefined);
  return (
    <div className="page page--gray page--main">
      <Header isAuth />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsTabs
            cities={cities}
            handleClick={handleTabsClick}
            activeCity={activeCity}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {activeOffers.length} places to stay in {activeCity.title}
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
                <OffersList offers={activeOffers} />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                city={activeCity}
                points={offersPoints}
                selectedPoint={activePoint}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
