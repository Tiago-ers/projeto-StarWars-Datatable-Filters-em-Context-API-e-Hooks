import { useContext } from 'react';
import { StarsWarsContext } from '../context/StarWarsContext';

function Filters(text) {
  const { data, filters } = useContext(StarsWarsContext);
  let filterData = [...text];

  if (filters) {
    filterData = data.filter((planeta) =>
      planeta.name.toLowerCase().includes(filters.filterByName.name),
    );
  }

  if (filters.filterByNumericValues.length !== 0) {
    filters.filterByNumericValues.forEach((itens) => {
      if (itens.comparison === 'maior que') {
        filterData = filterData.filter(
          (item) => Number(item[itens.column]) > Number([itens.value]),
        );
      }
      if (itens.comparison === 'igual a') {
        filterData = filterData.filter(
          (item) => Number(item[itens.column]) === Number([itens.value]),
        );
      }
      if (itens.comparison === 'menor que') {
        filterData = filterData.filter(
          (item) => Number(item[itens.column]) < Number([itens.value]),
        );
      }
    });
  }

  return filterData;
}

export default Filters;
