const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided ', () => {
    const obj = {
      name: 'John',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=John&profession=developer');
  });

  it('should create a query string even if an array is passed as value', () => {
    const data = {
      name: 'John',
      abilities: ['JS', 'TS', 'TDD'],
    };

    expect(queryString(data)).toBe('name=John&abilities=JS,TS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const data = {
      name: 'John',
      abilities: {
        first: 'JS',
        second: 'TS',
        third: 'TDD'
      },
    };

    expect(() => {
      queryString(data);
    }).toThrowError();
  });
});