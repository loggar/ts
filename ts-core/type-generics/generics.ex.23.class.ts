class MyClass<T> {
  private constructor() {}

  public static create<U>() {
    return new MyClass<U>();
  }
}

const myClass = MyClass.create<number>();
