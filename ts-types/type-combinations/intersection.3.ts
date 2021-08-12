type LeftType = {
  id: number;
  left: string;
};

type RightType = {
  id: number;
  right: string;
};

function showType(args: LeftType & RightType) {
  console.log(args);
}

showType({ id: 1, left: "test", right: "test" });
// Output: {id: 1, left: "test", right: "test"}
