export const calc = initValue => {
  let result = initValue;
  const calculator = {
    add(number) {
      result += number;
      return this;
    },
    mult(number) {
      result *= number;
      return this;
    },
    subtract(number) {
      result -= number;
      return this;
    },
    div(number) {
      result /= number;
      return this;
    },
    result() {
      return result;
    },
  };

  return calculator;
};

const result = calc(3).add(2).mult(4).div(10).subtract(5).result();
console.log(result);

const result2 = calc(100).add(2).mult(4).div(10).subtract(5).result();
console.log(result2);

const result3 = calc(5).mult(4).div(10).add(3).subtract(5).result();
console.log(result3);
