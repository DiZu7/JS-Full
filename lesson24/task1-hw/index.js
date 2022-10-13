export function getDiff(startDate, endDate) {
  const diffTime = new Date(endDate.getTime() - startDate.getTime());

  const days = Math.floor((diffTime / (1000 * 60 * 60 * 24)) % 30);
  const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffTime / (1000 * 60)) % 60);
  const seconds = Math.floor((diffTime / 1000) % 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

console.log(getDiff(new Date(2022, 8, 1), new Date()));

// export function getDiff(startDate, endDate) {
//   const diffTime = new Date(Math.abs(endDate.getTime() - startDate.getTime()));

//   const dayTime = 1000 * 60 * 60 * 24;
//   const hourTime = 1000 * 60 * 60;
//   const minTime = 1000 * 60;
//   const secondTime = 1000;

//   const days = Math.floor(diffTime / dayTime);

//   const hours = Math.floor((diffTime - days * dayTime) / hourTime);

//   const mins = Math.floor((diffTime - days * dayTime - hours * hourTime) / minTime);

//   const seconds = Math.floor(
//     (diffTime - days * dayTime - hours * hourTime - mins * minTime) / secondTime,
//   );

//   return `${days}d ${hours}h ${mins}m ${seconds}s`;
// }

// console.log(getDiff(new Date(2022, 8, 1), new Date()));
