import React, { useContext } from 'react';
import { StarsWarsContext } from '../context/StarWarsContext';

const RemoveFilter = () => {
  const { filters, deleteFilter } = useContext(StarsWarsContext);
  console.log(filters.order);
  if (filters.filterByNumericValues.length > 0) {
    return filters.filterByNumericValues.map((filter) => (
      <div data-testid="filter" key={filter.column}>
        <span>{`${filter.column} - ${filter.comparison} - ${filter.value}`}</span>
        <button type="button" onClick={() => deleteFilter(filter)}>
          x
        </button>
      </div>
    ));
  }
  return null;
};

export default RemoveFilter;
