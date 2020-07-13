type A = 1;
type B = 1;
type AisBandBisA = A extends B ? (B extends A ? true : false) : false; // true
