const data = require('../data/zoo_data');

function exist(id) {
  const teste = data.employees.map((element) => element.id === Object
    .values(id)[0]).some((element) => element === true);
  const teste2 = data.employees.map((element) => element.firstName === Object
    .values(id)[0]).some((element) => element === true);
  const teste3 = data.employees.map((element) => element.lastName === Object
    .values(id)[0]).some((element) => element === true);
  if (!teste && !teste2 && !teste3) {
    throw new Error('Informações inválidas');
  }
  const getObject = data.employees.filter((element) => element.id === Object
    .values(id)[0] || element.firstName === Object
    .values(id)[0] || element.lastName === Object.values(id)[0]);
  return getObject;
}

function createObj(id) {
  const filtro = exist(id);
  const filter = data.species.filter((element) => filtro[0].responsibleFor
    .includes(element.id));
  const objPerson = {
    id: filtro[0].id,
    fullName: `${filtro[0].firstName} ${filtro[0].lastName}`,
    species: filter.map((element) => element.name),
    locations: filter.map((element) => element.location),
  };
  return objPerson;
}

function arrayAllEmployees() {
  const employees = data.employees.map((element) => element.firstName);
  const result = employees.map((element) => createObj({ x: element }));
  return result;
}

function getEmployeesCoverage(person) {
  if (!person) {
    return arrayAllEmployees();
  }
  const filtro = exist(person);
  if (filtro) {
    return createObj(person);
  }
}

module.exports = getEmployeesCoverage;
