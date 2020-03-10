type A = number;
type X = string;
type Y = boolean;
type Z = X | Y; // Z is either X or Y
type B = (X & Y) | A; // D is combined X and Y or A
type Keys = keyof { a: string; b: boolean }; // get property keys in form of union
