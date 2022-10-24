const getNumber = value =>
  new Promise(resolve => {
    resolve(value);
  });

const asyncNum1 = getNumber(56);
const asyncNum2 = getNumber(undefined);
const asyncNum3 = getNumber('10');

const getSum = numbers =>
  numbers.filter(value => !isNaN(value)).reduce((acc, number) => acc + Number(number), 0);

export const asyncSum = (...asynNumbers) => {
  return Promise.all(asynNumbers)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};

asyncSum(asyncNum1, asyncNum2, asyncNum3).then(result => console.log(result));
