export function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => acc + elem ** 2, 0);
}

console.log(sumOfSquares(1, 2, 3));
