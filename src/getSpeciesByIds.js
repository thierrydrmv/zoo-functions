const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const filtro = species.filter((element) => ids.includes(element.id));
  return filtro;
}
console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));

module.exports = getSpeciesByIds;
