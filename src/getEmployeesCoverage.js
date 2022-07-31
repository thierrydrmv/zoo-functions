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
  const Nigel = [createObj({ x: employees[0] })];
  const Burl = [createObj({ x: employees[1] })];
  const Ola = [createObj({ x: employees[2] })];
  const Wil = [createObj({ x: employees[3] })];
  const Step = [createObj({ x: employees[4] })];
  const Shar = [createObj({ x: employees[5] })];
  const Ardith = [createObj({ x: employees[6] })];
  const Emery = [createObj({ x: employees[7] })];
  const array = Nigel.concat(Burl, Ola, Wil, Step, Shar, Ardith, Emery);
  return array;
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
