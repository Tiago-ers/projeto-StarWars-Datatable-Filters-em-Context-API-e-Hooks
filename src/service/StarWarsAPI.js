const API = 'https://swapi-trybe.herokuapp.com/api/planets';

const getAPI = async () =>
  fetch(`${API}`).then((data) =>
    data
      .json()
      .then((json) => (data.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export default getAPI;
