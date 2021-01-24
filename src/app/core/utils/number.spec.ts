import { getRandomNumberBetween } from './number';

describe('getRandomNumberBetween', () => {
  it('should get a number between 10 and 10000', () => {
    const result = getRandomNumberBetween(10, 10000);
    expect(result >= 10 && result <= 10000).toBeTruthy();
  });

  it('should get a number between 15 and 20', () => {
    const result = getRandomNumberBetween(15, 20);
    expect(result >= 10 && result <= 20).toBeTruthy();
  });

  it('should get a number between 1 and 2', () => {
    const result = getRandomNumberBetween(1, 2);
    expect(result >= 1 && result <= 2).toBeTruthy();
  });
});
