declare interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}

interface MyMixedObject<T> {
  setIntercept: (value: number) => MyMixedObject<T> & T;
  setSlope: (value: number) => MyMixedObject<T> & T;
  y: (x: number) => number;
}

const myFunctionalMixin = (
  { slope = 2, intercept = 1 } = { slope: 2, intercept: 1 }
) => <T extends object>(o: T): MyMixedObject<T> & T => {
  let myIntercept = intercept;
  let mySlope = slope;
  return Object.assign({}, o, {
    setIntercept(value: number): MyMixedObject<T> & T {
      myIntercept = value;
      return this;
    },
    setSlope(value: number): MyMixedObject<T> & T {
      mySlope = value;
      return this;
    },
    y(x: number): number {
      return x * mySlope + myIntercept;
    }
  });
};

const objectA = {
  eat() {
    console.log('Eat an apple');
  }
};
const objectB = {
  drink() {
    console.log('Drink a beverage');
  }
};

const myFunctionalMixinObjectA = myFunctionalMixin()(objectA);
myFunctionalMixinObjectA.eat(); // Eat an apple
console.log(myFunctionalMixinObjectA.y(1)); // (1 * 2) + 1 = 3
console.log(myFunctionalMixinObjectA.y(2)); // (2 * 2) + 1 = 5
myFunctionalMixinObjectA.setIntercept(3).setSlope(4);
console.log(myFunctionalMixinObjectA.y(1)); // (1 * 4) + 3 = 7
console.log(myFunctionalMixinObjectA.y(2)); // (2 * 4) + 3 = 11

const myFunctionalMixinObjectB = myFunctionalMixin({ slope: 3, intercept: 2 })(
  objectB
);
myFunctionalMixinObjectB.drink(); // Drink a beverage
console.log(myFunctionalMixinObjectB.y(1)); // (1 * 3) + 2 = 5;
console.log(myFunctionalMixinObjectB.y(2)); // (2 * 3) + 2 = 8;
myFunctionalMixinObjectB.setIntercept(3).setSlope(4);
console.log(myFunctionalMixinObjectB.y(1)); // (1 * 4) + 3 = 7
console.log(myFunctionalMixinObjectB.y(2)); // (2 * 4) + 3 = 11
