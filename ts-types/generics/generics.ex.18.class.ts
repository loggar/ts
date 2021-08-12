class Collection<T> {
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

  map<U>(func: (elem: T, index: number) => U): Collection<U> {
    return new Collection<U>(this.elements.map(func));
  }
}

const stringCollection = new Collection<string>();
stringCollection.add("Hello, World!");

const numberCollection = new Collection<number>();
numberCollection.add(3.14159);

const aircraftCollection = new Collection<IAircraft>();
aircraftCollection.add(myAircraft);
