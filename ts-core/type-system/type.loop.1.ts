type X = { a: 1; b: 2; c: 3 };
type Y = {
  [Key in keyof X]: X[Key] | null;
}; // {a: 1 | null, b: 1 | null, c: 1 | null}
