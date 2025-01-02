import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setCity } from '@store/actions';
import { cities } from '@mocks/Cities/Cities';

export const LocationsTabs = () => {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.entries(cities).map(([cityName, cityObj]) => (
            <li className="locations__item" key={cityName}>
              <a
                className={`locations__item-link tabs__item ${
                  cityName === city.title ? ' tabs__item--active' : ''
                }`}
                onClick={() => dispatch(setCity(cityObj))}
              >
                <span>{cityName}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
