import React, { useContext } from 'react';
import options from '../helpers/planets';
import { StarsWarsContext } from '../context/StarWarsContext';

const OptionsPlanets = () => {
  const { setColumn } = useContext(StarsWarsContext);

  return (
    <select
      name="column"
      data-testid="column-sort"
      onChange={(e) => setColumn(e.target.value)}
    >
      {options.map((opt) => (
        <option value={opt} key={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default OptionsPlanets;
