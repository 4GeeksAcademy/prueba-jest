// conversion.test.js
const { fromDollarToYen, fromEuroToDollar, fromYanToPound } = require('./conversion');

test('Convierte 1 dólar a yenes', () => {
  expect(fromDollarToYen(1)).toBeCloseTo(127.9);
});

test('Convierte 0 dólares a yenes', () => {
  expect(fromDollarToYen(0)).toBe(0);
});

test('Convierte 1 euro a dólares', () => {
  expect(fromEuroToDollar(1)).toBeCloseTo(1.2);
});

test('Convierte 0 euros a dólares', () => {
  expect(fromEuroToDollar(0)).toBe(0);
});

test('Convierte 1 yen a libras', () => {
  expect(fromYanToPound(1)).toBeCloseTo(0.8);
});

test('Convierte 0 yen a libras', () => {
  expect(fromYanToPound(0)).toBe(0);
});