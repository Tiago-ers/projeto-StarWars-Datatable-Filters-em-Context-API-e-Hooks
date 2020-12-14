import React, { useContext, useEffect } from 'react';
import { StarsWarsContext } from '../context/StarWarsContext';

const TableHead = () => {
  const { data } = useContext(StarsWarsContext);

  useEffect(() => {
    console.log(data);
  });

  const columns = Object.keys(data[0]).filter((col) => col !== 'residents');

  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={col}>{col}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
