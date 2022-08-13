import { reverseArray, withdraw, getAdults } from './index.js';

it('should get reversed array', () => {
  const result = reverseArray([1, 2, 4, 7, 3]);
  expect(result).toEqual([3, 7, 4, 2, 1]);
});

it('should get null if parameter is not an array', () => {
  const result = reverseArray('1, 7, 2');
  expect(result).toEqual(null);
});

it('should get reversed array', () => {
  const result = reverseArray([2, 10, 4, 18]);
  expect(result).toEqual([18, 4, 10, 2]);
});

it('should withdraw money from the account and return the balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('should withdraw money from the account and return the balance, return -1 if the balance has not enough money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});

it('should withdraw money from the account and return the balance, return -1 if the balance has not enough money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 37, -6], 'John', 50);
  expect(result).toEqual(-1);
});

it('should return empty object if the input object is empty', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it('should get the object with only adults', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get the object with only adults', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});
