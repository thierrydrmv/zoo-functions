const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animais = data.species;
  let resultado;
  if (!animal) {
    const arrayAnimal = animais.filter((element) => element.name);
    resultado = arrayAnimal;
  } else if (Object.keys(animal).length === 1) {
    const arrayAnimal = animais.filter((element) => element.name.includes(Object.values(animal)));
    resultado = arrayAnimal[0].residents.length;
  } else if (Object.keys(animal).length === 2) {
    const arrayAnimal = animais
      .filter((element) => element.name.includes(Object.values(animal)[0]));
    resultado = arrayAnimal[0].residents
      .filter((element) => element.sex === Object.values(animal)[1]).length;
  }
  return resultado;
}

console.log(countAnimals());

module.exports = countAnimals;
