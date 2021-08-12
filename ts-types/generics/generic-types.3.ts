interface GenericType<T> {
  id: number;
  name: T;
}

function showType(args: GenericType<string>) {
  console.log(args);
}

showType({ id: 1, name: "test" });
// Output: {id: 1, name: "test"}

function showTypeTwo(args: GenericType<number>) {
  console.log(args);
}

showTypeTwo({ id: 1, name: 4 });
// Output: {id: 1, name: 4}
