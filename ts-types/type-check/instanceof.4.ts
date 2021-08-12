class Foo {
  bar() {
    return "Hello World";
  }
}

class Bar {
  baz = "123";
}

function showType(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.bar());
    return arg.bar();
  }

  throw new Error("The type is not supported");
}

showType(new Foo());
// Output: Hello World

showType(new Bar());
// Error: The type is not supported
