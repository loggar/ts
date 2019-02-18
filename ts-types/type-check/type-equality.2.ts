// For another trick, I've found it's possible to keep this completely in the type domain by resolving
// the types to true and false (instead of true and never) then using a type assertion such as type
// AssertTrue<T extends true> = never; and/or type AssertTrue<T extends true> = never;.
// The only downside is having to name the type, but usually I just use an underscore or give it some descriptive name.

// For example:

// type Eq<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;
type AssertTrue<T extends true> = never;
type _StringTest = AssertTrue<Eq<string, string>>;

// That also allows for an assert function that can be written like so:

function assert<T extends true | false>(expectTrue: T) {}

// for example...
// assert<Eq<string, string | number>>(false);
