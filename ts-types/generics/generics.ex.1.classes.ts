class Example<T> {
  state: { val: T };
  constructor(input: T) {
    this.state = { val: input };
  }
  update(val: T): void {
    this.state = { val };
  }
  getVal(): T {
    return this.state.val;
  }
}

const exampleGenericNumber: Example<number> = new Example(1);
exampleGenericNumber.update(2);
const exampleGenericResult: number = exampleGenericNumber.getVal();

const exampleGenericString = new Example('one');
const exampleGenericResultOther: string = exampleGenericString.getVal();
