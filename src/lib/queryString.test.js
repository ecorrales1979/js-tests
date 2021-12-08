import { queryString, parse } from './queryString';

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

describe('Query string to object', () => {
  it('should convert a query string to an object', () => {
    const query = 'name=John&profession=developer';

    expect(parse(query)).toEqual({
      name: 'John',
      profession: 'developer',
    });
  });

  it('should convert a query string to an object even having only one pair of attributes', () => {
    const query = 'name=John';

    expect(parse(query)).toEqual({ name: 'John' });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const query = 'name=John&abilities=JS,TS,TDD';

    expect(parse(query)).toEqual({
      name: 'John',
      abilities: ['JS', 'TS', 'TDD'],
    });
  });

  it('should throw an error if query string does not have an equal sign', () => {
    const qs = 'name:John';

    expect(() => {
      parse(qs);
    }).toThrowError();
  });
});
