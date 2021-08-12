function showType<T>(args: T) {
  console.log(typeof args, args);
}

showType("test");
// Output: "test"

showType(1);
// Output: 1
