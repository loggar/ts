// The Omit utility is the opposite of the Pick type. And instead of selecting elements, it will remove K properties from the type T.

interface PickType {
  id: number;
  firstName: string;
  lastName: string;
}

function showType(args: Omit<PickType, "firstName" | "lastName">) {
  console.log(args);
}

showType({ id: 7 });
// Output: {id: 7}

showType({ firstName: "John" });
// Error: Object literal may only specify known properties, and 'firstName' does not exist in type 'Pick<PickType, "id">'

// This utility is similar to the way Pick works. It expects the type and the properties to omit from that type.
