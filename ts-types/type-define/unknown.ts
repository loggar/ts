const fnDouble = (input: unknown) => {
  if (typeof input === 'string') {
    return input + ' - ' + input;
  }
  if (Array.isArray(input)) {
    return input.concat(input);
  }
  return input;
};

const result = fnDouble('foo'); // ok

console.log(result);
