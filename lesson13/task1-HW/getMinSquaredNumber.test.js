import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('should get min squared number', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('should get min squared number', () => {
  const result = getMinSquaredNumber('string');
  expect(result).toEqual(null);
});

it('should get min squared number', () => {
  const result = getMinSquaredNumber([-2, -4, 5, 0.5]);
  expect(result).toEqual(0.25);
});
