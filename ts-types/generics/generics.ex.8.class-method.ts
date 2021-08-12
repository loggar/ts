class Utils {
  public randomValue<T, U, V>(one: T, two: U, three: V): T | U | V {
    // ...
  }

  // Or, as an arrow function:
  public randomValue = <T, U, V>(one: T, two: U, three: V): T | U | V => {
    // ...
  };
}
