interface ICollection<T> {
  add(t: T): void;
  contains(t: T): boolean;
  remove(t: T): void;
  forEach(func: (elem: T, index: number) => void): void;
  map<U>(func: (elem: T, index: number) => U): ICollection<U>;
}