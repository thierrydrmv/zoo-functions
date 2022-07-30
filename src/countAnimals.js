const data = require('../data/zoo_data');

function createArray() {
  const array = [];
  data.species.map((element) => {
    for (let i = 0; i < element.residents.length - 1; i += 1) {
      if (element.residents) {
        array.push(element.name);
      }
    }
    return array;
  });
  const arrayAnimais = array.reduce((acumulado, atual) => {
    const copia = { ...acumulado };
    if (copia[atual] === undefined) {
      copia[atual] = 1;
    }
    copia[atual] += 1;
    return copia;
  }, {});
  return arrayAnimais;
}

function countAnimals(animal) {
  const animais = data.species;
  if (!animal) {
    return createArray();
  } if (Object.keys(animal).length === 1) {
    return animais
      .filter((element) => element.name.includes(Object.values(animal)))[0].residents.length;
  } if (Object.keys(animal).length === 2) {
    return animais
      .filter((element) => element.name.includes(Object.values(animal)[0]))[0].residents
      .filter((element) => element.sex === Object.values(animal)[1]).length;
  }
}

// console.log(countAnimals());

console.log(countAnimals());

module.exports = countAnimals;
