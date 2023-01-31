const calculator = require('./calculator');

describe('dividing', () => {
  test('10 and 2 is 5', () => {
    expect(calculator.devide(10, 2)).toBe(5);
  });

  test('5 and 0 is 0', () => {
    expect(calculator.devide(5, 0)).toBe(
      'y value is 0,so the result is also 0'
    );
  });

  test('100 and 10 equals 10', () => {
    expect(calculator.devide(100, 10)).toBe(10);
  });

  test('-10 and 3 equals -3.3333333333333335', () => {
    expect(calculator.devide(-10, 5)).toBe(-2);
  });
});

describe('multiplying', () => {
  test('5 and 2 is 10', () => {
    expect(calculator.multiply(6, 2)).toBe(12);
  });

  test('5 and 0 is 0', () => {
    expect(calculator.multiply(5, 0)).toBe('result remains ${y}');
  });

  test('5 and 5 equals 25', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  });

  test('5 and 3 equals 15', () => {
    expect(calculator.multiply(5, 3)).toBe(15);
  });
});

describe('adding', () => {
  test('3 and 5 are 8', () => {
    expect(calculator.add(3, 5)).toBe(8);
  });

  test('0 and 0 not correct', () => {
    expect(calculator.add(0, 0)).toBe('The x & y values are 0');
  });

  test('10 and 0 equals 10', () => {
    expect(calculator.add(10, 0)).toBe(10);
  });
});

describe('substracting', () => {
  test('50 and 2 are 48', () => {
    expect(calculator.substract(50, 2)).toBe(48);
  });

  test('5 and 0 not correct', () => {
    expect(calculator.substract(5, 0)).toBe('Result remains ${x}');
  });
});
