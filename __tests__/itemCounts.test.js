const itemCounts = require('../lib/itemCounts');

describe('itemCount', () => {
  test('returns a count of the strings in the array', () => {
    const input = ['one', 'two', 'three', 'one', 'two', 'ZZZZ'];
    const expectedOutput = {
      'one': 2,
      'two': 2,
      'three': 1,
      'ZZZZ': 1,
    };

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('returns an empty hash when array is empty', () => {
    const input = [];
    const expectedOutput = {};

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('counts multiple words', () => {
    const input = ['hi', 'hi', 'hi'];
    const expectedOutput = {
      'hi': 3,
    };

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('is case-sensitive', () => {
    const input = ['a', 'A', 'a', 'A'];
    const expectedOutput = {
      'a': 2,
      'A': 2,
    };

    expect(itemCounts(input)).toEqual(expectedOutput);
  });
  /*
  test('string decomposition array:', () => {
    const input = 'Hello, this is a string. It contains punctuations! And ~other~ things...?';

  });
  */
});
