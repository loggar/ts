function example(x: number | boolean) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }
  return x.toFixed(2); // Error! Property 'toFixed' does not exist on type 'boolean'.
}
