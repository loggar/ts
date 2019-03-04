type ExpectedInput = 1 | 2 | 3;

const doSomething = (input: ExpectedInput) => {
  switch (input) {
    case 1:
      return 'Level 1';
    case 2:
      return 'Level 2';
    case 3:
      return 'Level 3';
  }
};

// doSomething(0); // Argument of type '0' is not assignable to parameter of type 'ExpectedInput'.ts(2345)
doSomething(1); // ok
doSomething(2); // ok
doSomething(3); // ok
// oSomething(4); // Argument of type '4' is not assignable to parameter of type 'ExpectedInput'.ts(2345)
