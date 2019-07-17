function reverse<T>(items: T[]): T[] {
  return items.reverse();
}
reverse([1, 2, 3]); // number[]
reverse([0, true]); // (number | boolean)[]
