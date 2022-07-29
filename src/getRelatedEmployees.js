const data = require('../data/zoo_data');

function isManager(id) {
  const ids = data.employees.map((element) => element.id);
  const [, manager1, manager2,, manager3] = ids;
  return ids.some(() => id === manager1 || id === manager2 || id === manager3);
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
