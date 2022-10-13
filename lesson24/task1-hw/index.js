export function getDiff(startDate, endDate) {
  const diff = endDate.getTime() - startDate.getTime();

  const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

console.log(getDiff(new Date(2022, 8, 1), new Date()));
