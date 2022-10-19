export const shmoment = initValue => {
  const clonedInitValue = new Date(initValue);
  const units = {
    years: 'FullYear',
    months: 'Month',
    days: 'Date',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    milliseconds: 'Milliseconds',
  };

  const dateCalculator = {
    add(unit, value) {
      clonedInitValue[`set${units[unit]}`](clonedInitValue[`get${units[unit]}`]() + value);
      return this;
    },

    subtract(unit, value) {
      clonedInitValue[`set${units[unit]}`](clonedInitValue[`get${units[unit]}`]() - value);
      return this;
    },

    result() {
      return clonedInitValue;
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
