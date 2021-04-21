// Partial allows you to make all properties of the type T optional. It will add a ? mark next to every field.

interface PartialType {
  id: number;
  firstName: string;
  lastName: string;
}

function showType(args: Partial<PartialType>) {
  console.log(args);
}

showType({ id: 1 });
// Output: {id: 1}

showType({ firstName: "John", lastName: "Doe" });
// Output: {firstName: "John", lastName: "Doe"}

// As you can see, we have an interface PartialType which is used as type annotation for the parameters received by the function showType(). And to make the properties optional, we have to use the Partial keyword and pass in the type PartialType as an argument. That said, now all fields become optional.
