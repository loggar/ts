const myObject = {
  intercept: 1,
  slope: 2,
  y(x: number): number {
    return x * this.slope + this.intercept;
  }
};

console.log(myObject.y(1)); // (1 * 2) + 1 = 3
console.log(myObject.y(2)); // (2 * 2) + 1 = 5

myObject.intercept = 3;
myObject.slope = 4;
console.log(myObject.y(1)); // (1 * 4) + 3 = 7
console.log(myObject.y(2)); // (2 * 4) + 3 = 11
