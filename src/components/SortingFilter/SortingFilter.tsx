import { useState } from 'react';
import { sortFilters } from './SortingFilter.constants/SortingFilter.constants';
import { SortOrder } from './SortingFilter.typings/SortingFilter.typings';

type SortingFilterProps = {
  currentFilter: SortOrder;
  onFilterChange: (filter: SortOrder) => void;
};

const SortingFilter = ({
  currentFilter,
  onFilterChange,
}: SortingFilterProps): JSX.Element => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setShowFilters(true)}
      >
        {currentFilter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          showFilters ? 'places__options--opened' : null
        }`}
        onClick={() => setShowFilters(false)}
      >
        {sortFilters.map((filter) => (
          <li
            className={`places__option ${
              filter === currentFilter ? 'places__option--active' : null
            }`}
            tabIndex={0}
            key={filter}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default SortingFilter;
