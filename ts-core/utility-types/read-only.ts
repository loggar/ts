interface ReadonlyType {
  id: number;
  name: string;
}

function showType(args: Readonly<ReadonlyType>) {
  args.id = 4;
  console.log(args);
}

showType({ id: 1, name: "Doe" });
// Error: Cannot assign to 'id' because it is a read-only property.

// Besides that, you can also use the keyword readonly in front of a property to make it not reassignable.
/*
interface ReadonlyType {
  readonly id: number;
  name: string;
}
*/
