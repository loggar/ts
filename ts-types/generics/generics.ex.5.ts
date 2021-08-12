// Function
/*
function identity<T>(input: T): T {
  return input;
}
*/

// Arrow Function
const identity = <T>(input: T): T => input;

console.log(identity<number>(5)); // 5
console.log(identity<string>("hello")); // hello
