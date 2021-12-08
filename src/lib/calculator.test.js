const { sum, subtract, multiply, divide } = require('./calculator');

it('should sum 2 and 2 and the result must be 4', () => {
  expect(sum(2, 2)).toBe(4);
});

it('should sum 2 and 2 even if one of them is a string and the result must be 4', () => {
  expect(sum(2, '2')).toBe(4);
});

it('should throw an error if arguments can not be summed', () => {
  expect(() => {
    sum('', 2)
  }).toThrowError();

  expect(() => {
    sum([1, 3])
  }).toThrowError();

  expect(() => {
    sum({})
  }).toThrowError();

  expect(() => {
    sum()
  }).toThrowError();
});

it('should subtract 2 from 6 and the result must be 4', () => {
  expect(subtract(6, 2)).toBe(4);
});

it('should subtract 2 from 5 even if one of them is a string and the result must be 3', () => {
  expect(subtract(5, '2')).toBe(3);
});

it('should throw an error if arguments can not be subtracted', () => {
  expect(() => {
    subtract('', 2)
  }).toThrowError();

  expect(() => {
    subtract([1, 3])
  }).toThrowError();

  expect(() => {
    subtract({})
  }).toThrowError();

  expect(() => {
    subtract()
  }).toThrowError();
});

it('should multiply 2 and 3 and the result must be 6', () => {
  expect(multiply(3, 2)).toBe(6);
});

it('should multiply 2 and 3 even if one of them is a string and the result must be 6', () => {
  expect(multiply('2', '3')).toBe(6);
});

it('should throw an error if arguments can not be multiplied', () => {
  expect(() => {
    multiply('', 2)
  }).toThrowError();

  expect(() => {
    multiply([1, 3])
  }).toThrowError();

  expect(() => {
    multiply({})
  }).toThrowError();

  expect(() => {
    multiply()
  }).toThrowError();
});

it('should divide 8 by 2 and the result must be 4', () => {
  expect(divide(8, 2)).toBe(4);
});

it('should divide 8 and 2 even if one of them is a string and the result must be 4', () => {
  expect(divide('8', '2')).toBe(4);
});

it('should throw an error if arguments can not be divided', () => {
  expect(() => {
    divide('', 2)
  }).toThrowError();

  expect(() => {
    divide([1, 3])
  }).toThrowError();

  expect(() => {
    divide({})
  }).toThrowError();

  expect(() => {
    divide()
  }).toThrowError();
});
