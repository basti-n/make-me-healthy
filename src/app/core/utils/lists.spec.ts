import { pickRandomValues } from './lists';

describe('pickRandomValues', () => {
  const baseArray = new Array<any>(
    'Michael',
    3,
    'Corleone',
    {},
    4,
    10,
    'Angular',
    'Unit',
    'Test'
  );
  it('should pick 3 random values from the provided array', () => {
    const results = pickRandomValues(baseArray, 3);

    expect(results.length).toEqual(3);
    expect(results.every((result) => baseArray.includes(result))).toBeTruthy(9);
  });
});
