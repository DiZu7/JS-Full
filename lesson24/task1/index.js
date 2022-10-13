const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export function dayOfWeek(date, days) {
  const day = new Date(date).getDate();

  const dateInFuture = new Date(date).setDate(day + days);
  return weekDays[new Date(dateInFuture).getDay()];
}

// test data

const result = dayOfWeek(new Date(2019, 0, 1), 14);

console.log(result);
