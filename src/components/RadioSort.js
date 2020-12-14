import React, { useContext } from 'react';
import { StarsWarsContext } from '../context/StarWarsContext';
import OptionsPlanets from './OptionsPlanets';
import FilterSort from './FilterSort';

const RadioSort = () => {
  const { setSort } = useContext(StarsWarsContext);

  return (
    <div>
      <OptionsPlanets />
      <label htmlFor="orderASC">
        <input
          type="radio"
          name="sort"
          value="ASC"
          data-testid="column-sort-input-asc"
          onClick={(e) => setSort(e.target.value)}
        />
        ASC
      </label>
      <label htmlFor="orderDSC">
        <input
          type="radio"
          value="DESC"
          name="sort"
          data-testid="column-sort-input-desc"
          onClick={(e) => setSort(e.target.value)}
        />
        DESC
      </label>
      <FilterSort />
    </div>
  );
};

export default RadioSort;
