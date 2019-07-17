class FooTyped {
  state: { val: number } = { val: 0 };
  update(val: number): void {
    this.state = { val };
  }
  getVal(): number {
    return this.state.val;
  }
}

const foobarT: Foo = new Foo();

foobar.update(3);
// foobar.update('foo'); // Error! Argument of type '"foo"' is not assignable to parameter of type 'number'.ts(2345)

const fooResult: number = foobar.getVal();
// const fooResultError: string = foobar.getVal(); // Error! Type 'number' is not assignable to type 'string'.ts(2322)
