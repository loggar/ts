const tupleA: [string, number, string] = ['foo', 1, 'bar'];
// const tupleB: [string, number, number] = ['foo', 1, 'bar']; // Error!

tupleA.push('foobar');
// tupleA.push(null); // Error! Argument of Type 'null' is not assignable to parameter of type 'string | number'.
