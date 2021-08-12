type Eq<A, B> = [A] extends [B] ? ([B] extends [A] ? true : never) : never;

type NumEq = Eq<1, 1>;
type NumNotEq = Eq<1, 2>;

// If you mentally perform the substitutions then the above declarations are equivalent to
/*
type NumEq = true;
type NumNotEq = never;
*/

// There are no values for the type true other than the literal value true and never is a type that indicates divergence
const neverValue: never = (() => {
  throw 'Error';
})();

// If we try to use these types incorrectly then the compiler will yell at us
// These are fine
let numEq1: NumEq = true;
let numNotEq1: NumNotEq = neverValue;

// These are not fine
/*
let numEq2: NumEq = false;
let numNotEq2: NumNotEq = null;
*/

// It is kinda annoying to pepper the code with assignments to verify that type equalities are actually equalities. The way to get around this is to use a function with an empty body and a single argument
function isTrue<T extends true>(t: T) {}

// Now using this function we can enforce compile time restrictions by calling the function instead of assigning values
// These are fine
isTrue<Eq<1, 1>>(true);
isTrue<Eq<2, 2>>(true);

// These are not fine
/*
isTrue<Eq<1, 2>>(true);
isTrue<Eq<2, 3>>(true);
*/

// Here's an example of how I've used Eq and isTrue in a small workflow library
/*
{
  // Dispatcher messages must implement all the message types
  isTrue<Eq<DispatcherMessage['type'], MessageType>>(true);
  // Client mapping must represent every message type
  isTrue<Eq<keyof ClientMapping, MessageType>>(true);
  // Client mapping keys and types must actually match so we don't accidentally map 'work' to 'done'
  isTrue<KeyTypeEq<ClientMapping>>(true);
}
*/
