const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function arrayAnimals(day) {
  const dia = data.species.filter((element) => element.availability.includes(day));
  return dia.map((element) => element.name);
}

function scheduleObj(dayOfWeek) {
  const obj = {
    [`${dayOfWeek}`]: {
      officeHour: `Open from ${hours[dayOfWeek].open}am until ${hours[dayOfWeek].close}pm`,
      exhibition: arrayAnimals(dayOfWeek),
    },
  };
  return obj;
}
function monday(dayOfWeek) {
  const obj = {
    [`${dayOfWeek}`]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return obj;
}
function week() {
  const dayOfWeek = Object.keys(hours);
  const Tues = scheduleObj(dayOfWeek[0]);
  const Wednes = scheduleObj(dayOfWeek[1]);
  const Thurs = scheduleObj(dayOfWeek[2]);
  const Fri = scheduleObj(dayOfWeek[3]);
  const Satur = scheduleObj(dayOfWeek[4]);
  const Sun = scheduleObj(dayOfWeek[5]);
  const Mon = monday(dayOfWeek[6]);
  const array = { ...Tues, ...Wednes, ...Thurs, ...Fri, ...Satur, ...Sun, ...Mon };
  return array;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return week();
  }
  if (data.species.some((element) => scheduleTarget.includes(element.name))) {
    return data.species.find((element) => element.name === scheduleTarget).availability;
  }
  if (scheduleTarget === 'Monday') {
    return monday(scheduleTarget);
  }
  if (hours[scheduleTarget]) {
    return scheduleObj(scheduleTarget);
  }
  return week();
}

module.exports = getSchedule;
