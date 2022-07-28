const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const filtro = species.filter((especie) => especie.name === animal);
  return filtro.every((element, index) => element.residents[index].age > age);
}

console.log(getAnimalsOlderThan('tigers', 10));

module.exports = getAnimalsOlderThan;
