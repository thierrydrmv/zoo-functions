const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let resultado;
  if (!employeeName) {
    resultado = {};
  }
  data.employees.find((element) => {
    if (element.firstName === employeeName || element.lastName === employeeName) {
      resultado = element;
    }
    return resultado;
  });
  return resultado;
}

module.exports = getEmployeeByName;
