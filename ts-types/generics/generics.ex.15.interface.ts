interface IUselessFunctions {
  // Not generic
  printHelloWorld();

  // Generic
  identity<T>(t: T): T;
}
