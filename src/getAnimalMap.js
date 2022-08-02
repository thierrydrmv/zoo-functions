const data = require('../data/zoo_data');

function where(spot) {
  return data.species.filter((element) => element.location
    .includes(spot)).map((element) => element.name);
}
function location(name) {
  const filtro = data.species.filter((element) => element.name.includes(name));
  const obj = {
    [`${name}`]: filtro[0].residents.map((element) => element.name),
  };
  return obj;
}

function locationSort(name) {
  const filtro = data.species.filter((element) => element.name.includes(name));
  const obj = {
    [`${name}`]: filtro[0].residents.map((element) => element.name).sort(),
  };
  return obj;
}

function locationMale(name) {
  const filtro = data.species.filter((element) => element.name.includes(name));
  const maleResidents = filtro[0].residents.filter((element) => element.sex === 'male');
  const obj = {
    [`${name}`]: maleResidents.map((element) => element.name),
  };
  return obj;
}

function locationMaleSorted(name) {
  const filtro = data.species.filter((element) => element.name.includes(name));
  const maleResidents = filtro[0].residents.filter((element) => element.sex === 'male');
  const obj = {
    [`${name}`]: maleResidents.map((element) => element.name).sort(),
  };
  return obj;
}

function locationFemale(name) {
  const filtro = data.species.filter((element) => element.name.includes(name));
  const femaleResidents = filtro[0].residents.filter((element) => element.sex === 'female');
  const obj = {
    [`${name}`]: femaleResidents.map((element) => element.name),
  };
  return obj;
}

function locationFemaleSorted(name) {
  const filtro = data.species.filter((element) => element.name.includes(name));
  const femaleResidents = filtro[0].residents.filter((element) => element.sex === 'female');
  const obj = {
    [`${name}`]: femaleResidents.map((element) => element.name).sort(),
  };
  return obj;
}

function objDirection(param) {
  const obj = {
    NE: where('NE'),
    NW: where('NW'),
    SE: where('SE'),
    SW: where('SW'),
  };
  return obj;
}

function objDirectionNames() {
  const objAnimal = {
    NE: where('NE').map((element) => location(element)),
    NW: where('NW').map((element) => location(element)),
    SE: where('SE').map((element) => location(element)),
    SW: where('SW').map((element) => location(element)),
  };
  return objAnimal;
}

function objDirectionNamesSort(param) {
  const objAnimal = {
    NE: where('NE').map((element) => locationSort(element)),
    NW: where('NW').map((element) => locationSort(element)),
    SE: where('SE').map((element) => locationSort(element)),
    SW: where('SW').map((element) => locationSort(element)),
  };
  return objAnimal;
}

function objDirectionNamesGeneric(animalGender) {
  const { sex } = animalGender;
  const objAnimal = {
    NE: where('NE')
      .map((element) => ((sex === 'male') ? locationMale(element) : locationFemale(element))),
    NW: where('NW')
      .map((element) => ((sex === 'male') ? locationMale(element) : locationFemale(element))),
    SE: where('SE')
      .map((element) => ((sex === 'male') ? locationMale(element) : locationFemale(element))),
    SW: where('SW')
      .map((element) => ((sex === 'male') ? locationMale(element) : locationFemale(element))),
  };
  return objAnimal;
}
function objDirectionNamesGenericSorted(sex) {
  const objAnimal = {
    NE: where('NE').map((element) =>
      ((sex === 'male' && sex === true)
        ? locationMaleSorted(element) : locationFemaleSorted(element))),
    NW: where('NW').map((element) =>
      ((sex === 'male' && sex === true)
        ? locationMaleSorted(element) : locationFemaleSorted(element))),
    SE: where('SE').map((element) =>
      ((sex === 'male' && sex === true)
        ? locationMaleSorted(element) : locationFemaleSorted(element))),
    SW: where('SW').map((element) =>
      ((sex === 'male' && sex === true)
        ? locationMaleSorted(element) : locationFemaleSorted(element))),
  };
  return objAnimal;
}
function testParam(param) {
  if (!param || Object.keys(param)[0] !== 'includeNames') {
    return true;
  }
}
function testGender(gender) {
  if (Object.keys(gender)[1] === 'sex' && Object.keys(gender).length === 2) {
    return true;
  }
}
function testSorted(sort) {
  if (Object.keys(sort).length === 2 && Object.keys(sort)[1] === 'sorted') {
    return true;
  }
}

function getAnimalMap(options) {
  if (testParam(options)) {
    return objDirection();
  }
  if (Object.keys(options).length === 1) {
    return objDirectionNames();
  }
  if (testSorted(options)) {
    return objDirectionNamesSort();
  }
  if (testGender(options)) {
    return objDirectionNamesGeneric(options);
  }
  return objDirectionNamesGenericSorted(options);
}

console.log(locationFemaleSorted('lions'));

// console.log(locationSort('lions'));

module.exports = getAnimalMap;
