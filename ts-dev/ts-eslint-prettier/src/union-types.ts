type Fruit = 'apple' | 'orange';
type Color = 'red' | 'orange';

type FruitEater = (fruit: Fruit) => number; // eats and ranks the fruit
type ColorConsumer = (color: Color) => string; // consumes and describes the colors

declare let f: FruitEater | ColorConsumer;

f('orange'); // It works! Returns a 'number | string'.

// f('apple'); // error - Argument of type '"red"' is not assignable to parameter of type '"orange"'.

// f('red'); // error - Argument of type '"red"' is not assignable to parameter of type '"orange"'.
