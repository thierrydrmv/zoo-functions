const data = require('../data/zoo_data');

function isManager(id) {
  const ids = data.employees.map((element) => element.id);
  const [, manager1, manager2,, manager3] = ids;
  return ids.some(() => id === manager1 || id === manager2 || id === manager3);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const pessoaColaboradora = data.employees
      .find((element) => element.id === managerId).managers;
    const ficha = data.employees.filter((element) => element.id === pessoaColaboradora[0]);
    console.log(pessoaColaboradora);
    return [`${ficha[0].firstName} ${ficha[0].lastName}`];
  }
}

// console.log(isManager('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
// console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
console.log(data.employees[4].managers);

module.exports = { isManager, getRelatedEmployees };
