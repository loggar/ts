interface IArray<T> {
  forEach(func: (elem: T, index: number) => void): this;
  map<U>(func: (elem: T, index: number) => U): IArray<U>;
}
