const reverseString = require('./reverse');

test('tamara', () => {
  expect(reverseString('tamara')).toBe('aramat');
});

test('category', () => {
  expect(reverseString('category')).toBe('yrogetac');
});

test('', () => {
  expect(reverseString('')).toBe('This string is empty');
});
