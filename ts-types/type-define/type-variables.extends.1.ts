type A = string;
type B = "1";
type AisB = A extends B ? true : false; // false
type BisA = B extends A ? true : false; // true
