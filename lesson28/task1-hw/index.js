export const shmoment = initValue => {
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
      initValue[`set${units[unit]}`](initValue[`get${units[unit]}`]() + value);
      return this;
    },

    subtract(unit, value) {
      initValue[`set${units[unit]}`](initValue[`get${units[unit]}`]() - value);
      return this;
    },

    result() {
      return initValue;
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
