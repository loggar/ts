type Fruit = 'apple' | 'orange';
type Color = 'red' | 'orange';

type FruitEater = (fruit: Fruit) => number; // eats and ranks the fruit
type ColorConsumer = (color: Color) => string; // consumes and describes the colors

declare let fruitOrColor: FruitEater | ColorConsumer;

var a1 = fruitOrColor('orange'); // It works! Returns a 'number | string'.

// fruitOrColor('apple'); // error - Argument of type '"red"' is not assignable to parameter of type '"orange"'.

// fruitOrColor('red'); // error - Argument of type '"red"' is not assignable to parameter of type '"orange"'.

console.log(a1);
