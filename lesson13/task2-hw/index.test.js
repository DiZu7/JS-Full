import { calc } from './calculator.js';

it('should get result of addition', () => {
  const result = calc('1 + 2');
  expect(result).toEqual('1 + 2 = 3');
});
it('should get result of subtraction', () => {
  const result = calc('1 - 2');
  expect(result).toEqual('1 - 2 = -1');
});
it('should get result of multiplication', () => {
  const result = calc('1 * 2');
  expect(result).toEqual('1 * 2 = 2');
});
it('should get result of division', () => {
  const result = calc('1 / 2');
  expect(result).toEqual('1 / 2 = 0.5');
});

it('should get null', () => {
  const result = calc(1 / 2);
  expect(result).toEqual(null);
});


