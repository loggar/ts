class TypedList<T> {
  private values: T[] = [];

  private constructor(values: T[]) {
    this.values = values;
  }

  public add(value: T): void {
    this.values.push(value);
  }

  public where(predicate: (value: T) => boolean): TypedList<T> {
    return TypedList.from<T>(this.values.filter(predicate));
  }

  public select<U>(selector: (value: T) => U): TypedList<U> {
    return TypedList.from<U>(this.values.map(selector));
  }

  public toArray(): T[] {
    return this.values;
  }

  public static from<U>(values: U[]): TypedList<U> {
    // Perhaps we perform some logic here.
    // ...

    return new TypedList<U>(values);
  }

  public static create<U>(values?: U[]): TypedList<U> {
    return new TypedList<U>(values ?? []);
  }

  // Other collection functions.
  // ..
}
