type ExampleGeneric<T, U> = {
  one: T;
  two: U;
};

const GenericAlias: ExampleGeneric<number, boolean> = {
  one: 1,
  two: false
};

/*
const GenericAliasError: ExampleGeneric<number, boolean> = {
  one: 1,
  // two: 'foo'
}; //Error!
*/
