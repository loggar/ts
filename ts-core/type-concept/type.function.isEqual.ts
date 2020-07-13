type IsEqual<A, B> = A extends B ? (B extends A ? true : false) : false;
// use it
type Result1 = IsEqual<string, number>; // false
type Result2 = IsEqual<1, 2>; // false
type Result3 = IsEqual<"a", "a">; // true

// js
const isEqual = (a: any, b: any) => (a == b ? (b == a ? true : false) : false);
