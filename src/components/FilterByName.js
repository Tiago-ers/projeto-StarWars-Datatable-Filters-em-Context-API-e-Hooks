import React, { useContext } from 'react';
import { StarsWarsContext } from '../context/StarWarsContext';

import './Table.css';

const FilterByName = () => {
  const { inputName, filters } = useContext(StarsWarsContext);

  return (
    <div>
      <label htmlFor="textName">Filter By name: </label>
      <input
        type="text"
        value={filters.filterByName.name}
        name="textName"
        data-testid="name-filter"
        onChange={(e) => inputName(e.target.value)}
      />
    </div>
  );
};

export default FilterByName;
