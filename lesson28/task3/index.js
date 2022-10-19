export const mult = a => b => a * b;

export const twice = mult(2);
const twiceResult = twice(7);
console.log(twiceResult);

export const triple = mult(3);
const tripleResult = triple(9);
console.log(tripleResult);
