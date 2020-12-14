import React, { useContext, useEffect } from 'react';
import { StarsWarsContext } from '../context/StarWarsContext';
import FilterByName from './FilterByName';
import FilterCompar from './FilterCompar';
import TableHead from './TableHead';
import RemoveFilter from './RemoveFilter';
import RadioSort from './RadioSort';
import Filters from '../helpers/Filters';
import orderTable from '../helpers/FilterSort';

import './Table.css';

const Table = () => {
  const { data, fetchAPI, filters } = useContext(StarsWarsContext);

  useEffect(() => {
    fetchAPI();
  }, []);

  const filtered = Filters(data);
  console.log(filtered);
  return (
    <div>
      <FilterByName />
      <FilterCompar />
      <RemoveFilter />
      <RadioSort />
      <table>
        {data.length > 0 && <TableHead />}
        <tbody>
          {orderTable(filtered, filters).map((row) => (
            <tr key={row.name}>
              <td data-testid="planet-name">{row.name}</td>
              <td>{row.rotation_period}</td>
              <td>{row.orbital_period}</td>
              <td>{row.diameter}</td>
              <td>{row.climate}</td>
              <td>{row.gravity}</td>
              <td>{row.terrain}</td>
              <td>{row.surface_water}</td>
              <td>{row.population}</td>
              <td>{row.films}</td>
              <td>{row.created}</td>
              <td>{row.edited}</td>
              <td>{row.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
