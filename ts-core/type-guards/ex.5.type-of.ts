const isNumber = (x: any): x is number => {
  return typeof x === "number";
};

const isString = (x: any): x is string => {
  return typeof x === "string";
};

const doSome = (x: number | string | boolean) => {
  if (isNumber(x)) {
    console.log(x.toFixed(0));
  } else if (isString(x)) {
    console.log(x.length);
  } else {
    console.log(x);
  }
};

doSome(1);
