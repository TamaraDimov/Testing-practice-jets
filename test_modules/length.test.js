const stringLength = require('./length.js');

test('Tamara has 6 letters', () => {
  expect(stringLength('Tamara')).toBe(6);
});

test('Introduction has 12 letters', () => {
  expect(stringLength('Introduction')).toBe(
    'Тhe result does not match the requrements',
  );
});
test('lenght with 0 letter', () => {
  expect(stringLength('')).toBe('Тhe result does not match the requrements');
});
