const fnIdentity = <T>(a: T): T => {
  return a;
};

const doubleIfPossibleResultOne1: number = <number>fnIdentity(2);
// Optional: We don't need to be specific about the type, TypeScript can infer the argument type.
const doubleIfPossibleResultOne2: number = fnIdentity(2);
const doubleIfPossibleResultTwo: string = fnIdentity('foo');
// const doubleIfPossibleResultError: string = fnIdentity(true); // Error!
