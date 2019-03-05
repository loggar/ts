interface MyObject {
  setIntercept: (value: number) => MyObject;
  setSlope: (value: number) => MyObject;
  y: (x: number) => number;
}

const myFactory = (
  { slope = 2, intercept = 1 } = { slope: 2, intercept: 1 }
) => {
  let myIntercept = intercept;
  let mySlope = slope;
  return {
    setIntercept(value: number): MyObject {
      myIntercept = value;
      return this;
    },
    setSlope(value: number): MyObject {
      mySlope = value;
      return this;
    },
    y(x: number): number {
      return x * mySlope + myIntercept;
    }
  };
};

const myFactoryObjectA = myFactory();
console.log(myFactoryObjectA.y(1)); // (1 * 2) + 1 = 3
console.log(myFactoryObjectA.y(2)); // (2 * 2) + 1 = 5
myFactoryObjectA.setIntercept(3).setSlope(4);
console.log(myFactoryObjectA.y(1)); // (1 * 4) + 3 = 7
console.log(myFactoryObjectA.y(2)); // (2 * 4) + 3 = 11

const myFactoryObjectB = myFactory({ slope: 3, intercept: 2 });
console.log(myFactoryObjectB.y(1)); // (1 * 3) + 2 = 5
console.log(myFactoryObjectB.y(2)); // (2 * 3) + 2 = 8
myFactoryObjectB.setIntercept(3).setSlope(4);
console.log(myFactoryObjectB.y(1)); // (1 * 4) + 3 = 7
console.log(myFactoryObjectB.y(2)); // (2 * 4) + 3 = 11
