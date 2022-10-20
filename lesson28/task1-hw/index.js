const getMethodsNames = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

const setMethodsNames = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

export const shmoment = initDate => {
  let result = new Date(initDate);

  const dateCalculator = {
    add(unit, value) {
      const currentUnitValue = result[getMethodsNames[unit]]();
      result = new Date(result[setMethodsNames[unit]](currentUnitValue + value));
      return this;
    },

    subtract(unit, value) {
      return this.add(unit, -value);
    },

    result() {
      return result;
    },
  };

  return dateCalculator;
};

console.log(
  shmoment(new Date(2020, 0, 7, 17, 17, 17))
    .add('minutes', 2)
    .add('days', 8)
    .subtract('years', 1)
    .result(),
);
