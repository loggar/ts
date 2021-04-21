const double = x => x * 2;
const hello = x => `Hello ${x}`;
const conversion = x => `Hello ${x.toString()}`;

const identity = value => ({
  map: fn => identity(fn(value)),
  valueOf: () => value
});

const a = identity(3);
const b = a.map(double);
const vB = b.valueOf();
console.log(vB); // 6

const c = identity('cat');
const d = c.map(double);
const vD = d.valueOf();
console.log(vD); // NaN UNEXPECTED

const e = c.map(hello);
const vE = e.valueOf();
console.log(vE); // Hello cat

const f = a.map(conversion);
const vF = f.valueOf();
console.log(vF); // Hello 3

const g = a.map(double).map(conversion);
const gF = g.valueOf();
console.log(gF); // Hello 6
