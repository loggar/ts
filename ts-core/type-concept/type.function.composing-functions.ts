type IfElse<A, B, IfTrue, IfFalse> = IsEqual<A, B> extends true
  ? IfTrue
  : IfFalse;

type Result1 = IfElse<0, 1, "Equal", "Not Equal">; // Not Equal
type Result2 = IfElse<1, 1, "Equal", "Not Equal">; // Equal
