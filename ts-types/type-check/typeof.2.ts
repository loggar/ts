let myObject = { name: "test" };
let myOtherObject: typeof myObject; // Borrow type of the "myObject"
myOtherObject = { name: "test2" };
type TypeFromTypeOf = typeof myOtherObject; // Borrow
