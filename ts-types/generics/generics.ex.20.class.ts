class InMemoryCollection<T> implements ICollection<T> {
  private elements: T[] = [];

  constructor(elements: T[] = []) {
    this.elements = elements;
  }

  add(elem: T): void {
    this.elements.push(elem);
  }

  contains(elem: T): boolean {
    return this.elements.includes(elem);
  }

  remove(elem: T): void {
    this.elements = this.elements.filter((existing) => existing !== elem);
  }

  forEach(func: (elem: T, index: number) => void): void {
    return this.elements.forEach(func);
  }

  map<U>(func: (elem: T, index: number) => U): ICollection<U> {
    return new InMemoryCollection<U>(this.elements.map(func));
  }
}
