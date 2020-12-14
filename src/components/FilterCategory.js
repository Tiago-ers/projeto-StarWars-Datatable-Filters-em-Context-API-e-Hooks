import React, { useContext } from 'react';
import { StarsWarsContext } from '../context/StarWarsContext';

const FilterCategory = () => {
  const { filters, setColumn } = useContext(StarsWarsContext);

  let columnCategorias = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  if (filters.filterByNumericValues.length > 0) {
    filters.filterByNumericValues.forEach(({ column }) => {
      columnCategorias = columnCategorias.filter(
        (categoria) => categoria !== column,
      );
    });
  }

  return (
    <select
      data-testid="column-filter"
      onChange={(e) => setColumn(e.target.value)}
    >
      <option>Coluna</option>
      {columnCategorias.map((opt) => (
        <option value={opt} key={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default FilterCategory;
