// input: number, func, context, any data
// output: func? undefined

// algo
// do callback with delay (use setTimeOUT)

export const delay = (delay, callback, context, ...args) => {
  setTimeout(() => callback.apply(context, [...args]), delay);
};

const sum = (...args) => {
  console.log([...args].reduce((acc, args) => acc + args, 0));
};

delay(2000, sum, this, 2, 3, 4);
