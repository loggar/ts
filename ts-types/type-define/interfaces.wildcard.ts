interface Updateable<T> {
  state: { val: T };
  update(a: T): void;
}

class InterfaceExample implements Updateable<boolean> {
  state = { val: false };
  constructor(val: boolean) {
    this.state = { val };
  }
  update(val: boolean) {
    this.state = { val };
  }
  getValue() {
    return this.state.val;
  }
}

const exampleInstance = new InterfaceExample(true);
const exampleInstanceResultOk: boolean = exampleInstance.getValue();
// const exampleInstanceResultError: number = exampleInstance.getValue(); // Error!
