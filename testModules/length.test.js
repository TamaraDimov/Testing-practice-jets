const stringLength = require('./length');

test('Tamara has 6 letters', () => {
  expect(stringLength('Tamara')).toBe(6);
});

test('Category has 8 letters', () => {
  expect(stringLength('Category')).toBe('The result does not match the query');
});

test('Lenght bellow 1 letter', () => {
  expect(stringLength('')).toBe('This string is empty');
});
