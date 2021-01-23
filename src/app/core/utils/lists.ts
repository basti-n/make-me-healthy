import { getRandomNumberBetween } from './number';

export function pickRandomValues<T extends Array<any>>(
  base: T,
  size: number
): Array<any> {
  return base
    .slice(0, size)
    .map((_) => getRandomNumberBetween(0, base.length - 1))
    .map((index) => base[index]);
}
