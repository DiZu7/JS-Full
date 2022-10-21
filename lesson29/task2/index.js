'use strict';

export const pinger = (count, period) => {
  let i = count;
  const interval = setInterval(() => {
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Ping');
  });
};

// // examples
pinger(5, 100); // makes 5 writes with 100 ms interval
pinger(7, 150); // makes 7 writes with 1500 ms interval
