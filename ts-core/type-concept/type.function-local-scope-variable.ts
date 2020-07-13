type MergePropertyValue<
  A,
  B,
  Prop extends keyof A & keyof B,
  _APropValue = A[Prop], // local variable
  _BPropValue = B[Prop]
> = _APropValue | _BPropValue; // local variable // sum type

// JS🟨 take a look at similar JS function but working at assumed number fields
function mergePropertyValue(a, b, prop) {
  const _aPropValue = a[prop];
  const _bPropValue = b[prop];
  return _aPropValue + _bPropValue; // sum
}

type AreEqual<
  A,
  B,
  C,
  _AisB = IsEqual<A, B>,
  _BisC = IsEqual<B, C>
> = _AisB extends true ? IsEqual<_AisB, _BisC> : false;

type Result = AreEqual<1, 1, 1>; // true
type Result2 = AreEqual<1, 2, 1>; // false
type Result3 = AreEqual<"A", "A", "A">; // true
type Result4 = AreEqual<"A", "A", "B">; // false
