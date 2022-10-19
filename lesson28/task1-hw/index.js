export const shmoment = initValue => {
  let result = new Date(initValue).getTime();
  const yearTime = 1000 * 60 * 60 * 24 * 365;
  const monthTime = 1000 * 60 * 60 * 24 * 30;
  const dayTime = 1000 * 60 * 60 * 24;
  const hourTime = 1000 * 60 * 60;
  const minuteTime = 1000 * 60;
  const secondTime = 1000;
  const millisecondTime = 1;

  const units = {
    years: yearTime,
    months: monthTime,
    days: dayTime,
    hours: hourTime,
    minutes: minuteTime,
    seconds: secondTime,
    milliseconds: millisecondTime,
  };

  const dateCalculator = {
    add(unit, value) {
      result += units[unit] * value;
      return this;
    },

    subtract(unit, value) {
      result -= units[unit] * value;
      return this;
    },

    result() {
      return new Date(result);
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
