/*
    A função sort recebe dois parametros.
    Se retornar -1 indica que a vêm antes de b.
    Se retornar 1 indica que b vêm antes de a.
    Se retornar 0 são iguais, não faz nada.
    Referência: https://www.smashingmagazine.com/2020/03/sortable-tables-react/
*/

// Ordenando colunas
function orderTable(filtered, filters) {
  // Faz a ordenação das colunas numéricas
  switch (filters.order.column) {
    case 'rotation_period':
    case 'orbital_period':
    case 'surface_water':
    case 'population':
    case 'diameter':
      if (filters.order.sort === 'ASC') {
        filtered.sort(
          (a, b) =>
            Number(a[filters.order.column]) - Number(b[filters.order.column]),
        );
      } else { // filto === 'DESC'
        filtered.sort(
          (a, b) =>
            Number(b[filters.order.column]) - Number(a[filters.order.column]),
        );
      }
      return filtered;
    // As colunas não numericas serão ordenadas por default.
    // Ascendente do menor para o maior.
    default:
      filtered.sort((a, b) => {
        if (
          a[filters.order.column.toLowerCase()] <
          b[filters.order.column.toLowerCase()]
        ) {
          return -1;
        }

        if (
          a[filters.order.column.toLowerCase()] >
          b[filters.order.column.toLowerCase()]
        ) {
          return 1;
        }

        return 0;
      });
  }
  // Inverte a ordenção para Descendente, do maior para o menor.
  return filters.order.sort === 'DESC' ? filtered.reverse() : filtered;
}

export default orderTable;
