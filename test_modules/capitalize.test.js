const capitalize = require('./capitalize.js');

test('tamara has 6 letters', () => {
  expect(capitalize('tamara')).toBe('Tamara');
});

test('do I follow JavaScript best practices?', () => {
  expect(capitalize('do')).toBe('Do');
});
