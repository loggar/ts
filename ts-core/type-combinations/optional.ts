const optionalLength = (input?: string | Array<any>) => {
  if (typeof input === 'string') {
    return input.length;
  }

  if (Array.isArray(input)) {
    return input.length;
  }

  return false;
};

optionalLength();
optionalLength(undefined);
optionalLength([1, 2, 3, 4]);
optionalLength('foo');

// optionalLength(1) // Error!
// optionalLength(null); // error! We need to be explicit about null
