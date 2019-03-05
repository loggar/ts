const fn_length = (input: any) => {
  if (typeof input === 'string') {
    return input.length;
  }

  if (Array.isArray(input)) {
    return input.length;
  }

  return 0;
};

const r1 = fn_length('foo');
const r2 = fn_length([1, 2, 3, 4]);
const r3 = fn_length(1); // no Error!

console.log(r1);
console.log(r2);
console.log(r3);
