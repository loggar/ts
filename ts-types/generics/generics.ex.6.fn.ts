function randomValue<T, U, V>(one: T, two: U, three: V): T | U | V {
  // This is a tuple if you’re not familiar.
  const options: [T, U, V] = [one, two, three];

  const rndNum = getRndNumInInclusiveRange(0, 2);

  return options[rndNum];
}

// Calling the function.
// `value` has type `string | number | IAircraft`
const value = randomValue<string, number, IAircraft>(
  myString,
  myNumber,
  myAircraft
);
