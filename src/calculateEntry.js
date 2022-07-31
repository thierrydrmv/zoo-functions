const data = require('../data/zoo_data');

function createArray(array) {
  const arrayAge = [];
  array.map((element) => {
    if (element.age < 18) {
      arrayAge.push('child');
    } else if (element.age >= 18 && element.age < 50) {
      arrayAge.push('adult');
    } else {
      arrayAge.push('senior');
    }
    return arrayAge;
  });
  return arrayAge;
}

function countEntrants(array) {
  const arrayAge = createArray(array);
  const arrayFinal = arrayAge.reduce((acumulado, atual) => {
    const copia = { ...acumulado };
    if (copia[atual] === undefined) {
      copia[atual] = 0;
    }
    copia[atual] += 1;
    return copia;
  }, {});
  return arrayFinal;
}

function calculateEntry(array) {
  if (!array || Object.keys(array).length === 0) {
    return 0;
  }
  const idade = createArray(array);
  const preco = data.prices;
  const arrayfinal = [];
  for (let i = 0; i < idade.length; i += 1) {
    arrayfinal.push(preco[idade[i]]);
  }
  return parseFloat(arrayfinal.reduce((total, atual) => total + atual).toFixed(2));
}

console.log(calculateEntry([{ name: 'asdas', age: 5 }, { name: 'asdas', age: 50 }]));

module.exports = { calculateEntry, countEntrants };
