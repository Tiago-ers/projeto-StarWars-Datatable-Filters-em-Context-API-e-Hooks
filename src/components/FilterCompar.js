import React, { useContext } from 'react';
import { StarsWarsContext } from '../context/StarWarsContext';
import FilterCategory from './FilterCategory';

const FilterCompar = () => {
  const {
    column,
    comparison,
    value,
    setComparison,
    setValue,
    addValues,
  } = useContext(StarsWarsContext);

  return (
    <div>
      <FilterCategory />
      <select
        data-testid="comparison-filter"
        onChange={(e) => setComparison(e.target.value)}
      >
        <option>Comparação</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => addValues(column, comparison, value)}
      >
        Filtrar
      </button>
    </div>
  );
};

export default FilterCompar;
