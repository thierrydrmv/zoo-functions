const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const older = data.employees
    .filter((element) => element.id === id)[0].responsibleFor[0];
  const filtro = data.species.filter((element) => older.includes(element.id))[0].residents;
  return filtro.sort((a, b) => b.age - a.age)[0];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
