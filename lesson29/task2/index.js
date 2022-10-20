'use strict';

export const pinger = (count, period) => {
  let i = count;
  console.log('Ping');
  const interval = setInterval(() => {
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};

window.addEventListener('load')

// examples
pinger(5, 100); // makes 5 writes with 100 ms interval
pinger(7, 1500); // makes 7 writes with 1500 ms interval
