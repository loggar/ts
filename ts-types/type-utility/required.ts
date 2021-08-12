interface RequiredType {
  id: number;
  firstName?: string;
  lastName?: string;
}

function showType(args: Required<RequiredType>) {
  console.log(args);
}

showType({ id: 1, firstName: "John", lastName: "Doe" });
// Output: { id: 1, firstName: "John", lastName: "Doe" }

showType({ id: 1 });
// Error: Type '{ id: number: }' is missing the following properties from type 'Required<RequiredType>': firstName, lastName
