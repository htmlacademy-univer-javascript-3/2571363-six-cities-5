import { City, CityName } from '../../typings/City/City';

type TLocationsTabsProps = {
  cities: Record<CityName, City>;
  handleClick: (city: City) => void;
  activeCity: City;
};

export const LocationsTabs = ({
  cities,
  handleClick,
  activeCity,
}: TLocationsTabsProps) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {Object.entries(cities).map(([cityName, city]) => (
        <li className="locations__item" key={cityName}>
          <a
            className={`locations__item-link tabs__item ${
              cityName === activeCity.title ? ' tabs__item--active' : ''
            }`}
            onClick={() => handleClick(city)}
          >
            <span>{cityName}</span>
          </a>
        </li>
      ))}
    </ul>
  </section>
);
