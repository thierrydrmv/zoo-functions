const data = require('../data/zoo_data');

function objDirection() {
  const obj = {
    NE: data.species.filter((element) => element.location
      .includes('NE')).map((element) => element.name),
    NW: data.species.filter((element) => element.location
      .includes('NW')).map((element) => element.name),
    SE: data.species.filter((element) => element.location
      .includes('SE')).map((element) => element.name),
    SW: data.species.filter((element) => element.location
      .includes('SW')).map((element) => element.name),
  };
  return obj;
}

function getAnimalMap(options) {
  if (!options || Object.keys(options)[0] !== 'includeNames') {
    return objDirection();
  }
  if (Object.keys(options)[0] === 'includeNames' && Object.keys.length === 1) {
    const obj = {
      NE: data.species.filter((element) => element.location
        .includes('NE')).map((element) => element.name),
    };
    return obj;
  }
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
