const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const older = data.employees
    .filter((element) => element.id === id)[0].responsibleFor[0];
  const filtro = data.species.filter((element) => older
    .includes(element.id))[0].residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(filtro);
}

module.exports = getOldestFromFirstSpecies;
