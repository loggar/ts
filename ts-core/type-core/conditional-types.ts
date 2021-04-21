// Conditional types test two types and select one of them depending on the outcome of that test.

type NonNullable<T> = T extends null | undefined ? never : T;

// This example of the NonNullable utility type checks if the type is null or not and handle it depending on that. And as you can note, it uses the JavaScript ternary operator.
