type GetLength<A extends Array<any>> = A["length"];
type Length = GetLength<["a", "b", "c"]>; // evaluates to 3

// js
const getLength = (a: Array<any>) => a["length"];
