const formatter = new Intl.DateTimeFormat('en', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

export function getGreenwichTime(date) {
  return formatter.format(date);
}

console.log(getGreenwichTime(new Date()));
