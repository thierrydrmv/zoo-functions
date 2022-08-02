const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const managerOf = data.employees
      .filter((element) => element.managers.includes(managerId));
    return managerOf.reduce((unido, atual) => unido
      .concat(`${atual.firstName} ${atual.lastName}`), []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
