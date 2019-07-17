let add = (a: number, b: number): number => {
  return a + a;
};

add(2, 2);
// add(2, 'a'); // Error!
const addResult: number = add(2, 2);

// const addResultError: string = add(1, 2); // Error! Type 'number' is not assignable to type 'string'.
