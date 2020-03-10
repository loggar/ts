type Prepend<T, Arr extends Array<any>> = ((
  a: T,
  ...prev: Arr
) => any) extends (...merged: infer Merged) => any
  ? Merged
  : never;

type KeysArray<T extends object, ACC extends Array<any> = []> = {
  [K in keyof T]: {} extends Omit<T, K>
    ? Prepend<T[K], ACC>
    : KeysArray<Omit<T, K>, Prepend<T[K], ACC>>;
}[keyof T];

type CountProps<T extends object, _Arr = KeysArray<T>> = _Arr extends Array<any>
  ? _Arr["length"]
  : never;

type Y = CountProps<{ a: 1; b: 2; c: 3; d: 1 }>; // Evaluates to 4
