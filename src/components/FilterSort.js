import React, { useContext } from 'react';
import { StarsWarsContext } from '../context/StarWarsContext';

const FilterSort = () => {
  const { columnSort, column, sort } = useContext(StarsWarsContext);

  return (
    <div>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={() => columnSort(column, sort)}
      >
        Filter
      </button>
    </div>
  );
};

export default FilterSort;
