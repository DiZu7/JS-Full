export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const absolutNumbers = arr.map((num) => Math.abs(num));
  return Math.min(...absolutNumbers) ** 2;
};

console.log(getMinSquaredNumber([-2, -4, 5, 0.5]));
console.log(getMinSquaredNumber([]));
console.log(getMinSquaredNumber(1));
