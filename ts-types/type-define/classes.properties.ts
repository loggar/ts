class Foo {
  state = { val: 0 };
  update(val: number) {
    this.state = { val };
  }
  getVal() {
    return this.state.val;
  }
}

const foobar: Foo = new Foo();
