type AB = { a: number; b: string };

const readOnlyNone = (o: AB) => {
  o.a = 100; // No Error!
  return o;
};

type ReadOnlyA = { readonly a: number; b: string };

const readOnlyA = (o: ReadOnlyA) => {
  // o.a = 100; // Error!
  o.b = 'test'; // No Error!
  return o;
};

type ReadOnlyAB = Readonly<{ a: number; b: string }>;

const readOnlyAB = (o: ReadOnlyAB) => {
  // o.a = 100; // Error!
  // o.b = 'test'; // Error!
  return o;
};
