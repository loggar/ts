type Partial<T> = { [P in keyof T]?: T[P] };

// The generic Partial type is defined with a single type parameter T.
// keyof T represents the union of all property names of T as string literal types.
// [P in keyof T]?: T[P] denotes that the type of each property P of type T should be optional and transformed to T[P].
// T[P] represents the type of the property P of the type T.
