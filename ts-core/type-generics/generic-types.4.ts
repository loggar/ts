interface GenericType<T, U> {
  id: T;
  name: U;
}

function showType(args: GenericType<number, string>) {
  console.log(args);
}

showType({ id: 1, name: "test" });
// Output: {id: 1, name: "test"}

function showTypeTwo(args: GenericType<string, string[]>) {
  console.log(args);
}

showTypeTwo({ id: "001", name: ["This", "is", "a", "Test"] });
// Output: {id: "001", name: Array["This", "is", "a", "Test"]}
