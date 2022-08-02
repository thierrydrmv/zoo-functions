const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const filtro = species.filter((element) => ids.includes(element.id));
  return filtro;
}

module.exports = getSpeciesByIds;
