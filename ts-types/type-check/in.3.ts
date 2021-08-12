interface FirstType {
  x: number;
}
interface SecondType {
  y: string;
}

function showType(arg: FirstType | SecondType) {
  if ("x" in arg) {
    console.log(`The property ${arg.x} exists`);
    return `The property ${arg.x} exists`;
  }
  throw new Error("This type is not expected");
}

showType({ x: 7 });
// Output: The property 7 exists

showType({ y: "ccc" });
// Error: This type is not expected
