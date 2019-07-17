/**
 * Variable definitinon
 */
let a = "some string";
let b = 1;
a = b; // Error! Type 'number' is not assignable to type 'string'.

// In case of complex objects, TypeScript looks for the most common type
// to infer the type of the object.
const arr = [0, 1, false, true]; // (number | boolean)[]

/**
 * Function return types
 */
function sum(x: number, y: number) {
  return x + y; // infer to return a number
}
