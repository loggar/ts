// It allows you to create a new type from an existing model T by selecting some properties K of that type.

interface PickType {
  id: number;
  firstName: string;
  lastName: string;
}

function showType(args: Pick<PickType, "firstName" | "lastName">) {
  console.log(args);
}

showType({ firstName: "John", lastName: "Doe" });
// Output: {firstName: "John"}

showType({ id: 3 });
// Error: Object literal may only specify known properties, and 'id' does not exist in type 'Pick<PickType, "firstName" | "lastName">'

// Pick is a bit different from the previous utilities we have already seen. It expects two parameters - T is the type you want to pick elements from and K is the property you want to select. You can also pick multiple fields by separating them with a pipe(|) symbol.
