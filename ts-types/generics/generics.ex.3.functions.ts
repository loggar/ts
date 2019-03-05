const identity = <T>(a: T): T => {
  return a;
};

const doubleIfPossibleResultOne1: number = <number>identity(2);
// Optional: We don't need to be specific about the type, TypeScript can infer the argument type.
const doubleIfPossibleResultOne2: number = identity(2);
const doubleIfPossibleResultTwo: string = identity('foo');
// const doubleIfPossibleResultError: string = identity(true); // Error!
