export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const squaredNumbers = arr.map((num) => num ** 2);
  return Math.min(...squaredNumbers);
};

console.log(getMinSquaredNumber([-2, -4, 5, 0.5]));
console.log(getMinSquaredNumber([]));
console.log(getMinSquaredNumber(1));
